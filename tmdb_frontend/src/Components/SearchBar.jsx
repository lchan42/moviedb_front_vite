import React, { useEffect, useState } from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";
import GlobalApi from '../Services/GlobalApi'
import SearchBarSuggestion from './SearchBarSuggestion';


function SearchBar() {
	const [input, setInput]= useState("")
	const [searchSuggestion, setSearchSuggestion] = useState([])

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
	<div className='flex gap-2 items-center'>
		<FaSearch id="search-icon" className="text-white" />
		<div className='
			flex
			text-white
			text-[15px]
			gap-2
			font-semibold
			cursor-pointer
			hover:underline
			underline-offset-8
			w-96
			'
		>
			<input
				id='searchBarId'
				className='
				input:focus outline-none
				w-[50%] md:w-[100%]
				bg-transparent
				shadow border-b py-1 px-3 white
				leading-tight focus:shadow-outline"
				'
				placeholder="type to search..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{/* close icon */}
			{input !== "" && ( // Only show the cross icon if there's content in the input
			 	<FaTimes onClick={handleClearSearch} />
			)}
			{/* search suggestion */}
			<SearchBarSuggestion className="pb-10" search={searchSuggestion}/>
		</div>
	</div>
	)
}

export default SearchBar
