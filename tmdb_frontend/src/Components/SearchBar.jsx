import React, { useEffect, useState } from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";
import GlobalApi from '../Services/GlobalApi'
import SearchBarSuggestion from './SearchBarSuggestion';


function SearchBar() {
	const [input, setInput]= useState("")
	const [searchSuggestion, setSearchSuggestion] = useState([])
	const [focusOnSearch, setFocusOnSearch] = useState(false)

	const handleClearSearch = () => {
		setInput("")
		setSearchSuggestion([])
	}

	useEffect(() => {
		let timer;

		const debounceSearch = () => {
			clearTimeout(timer);

			timer = setTimeout(() => {
				GlobalApi.getMovieByName(input)
				.then(res => { setSearchSuggestion(res.data.results) })
				.catch(error => { console.error('Error fetching search results:', error) })
			}, 200)
		}
		debounceSearch();
		return () => clearTimeout(timer);
	  }, [input]);

	return (
	<div className='flex gap-2 pl-5 pr-5 items-center justify-start md:justify-center w-full' onClick={() => setFocusOnSearch(false)}>
		<FaSearch id="search-icon" className="text-white" />
		<div className='
			flex
			text-white
			text-[15px]
			items-center
			gap-2
			font-semibold
			cursor-pointer
			hover:underline
			underline-offset-8
			w-full
			max-w-screen-sm
			relative
			'
		>
			<div className=' w-[50%] md:w-[100%] object-top absolute '>
				<input
					id='searchBarId'
					className='
					input:focus outline-none
					bg-transparent
					shadow border-b py-1 px-3 white
					leading-tight focus:shadow-outline
					w-full
					'
					placeholder="type to search..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onClick={(e) => {{
						e.stopPropagation()
						setFocusOnSearch(true)
					}}}
				/>
				{/* search suggestion */}
				<SearchBarSuggestion search={searchSuggestion} focusOnSearch={focusOnSearch}/>
			</div>
		</div>
			{/* close icon */}
			{input !== "" && ( // Only show the cross icon if there's content in the input
				<FaTimes onClick={handleClearSearch} className='text-white cursor-pointer'/>
			)}
	</div>
	)
}

export default SearchBar
