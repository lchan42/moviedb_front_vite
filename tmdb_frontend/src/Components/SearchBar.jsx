import React, { useEffect, useState } from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";
import GlobalApi from '../Services/GlobalApi'
import SearchBarSuggestion from './SearchBarSuggestion';


function SearchBar() {
	const [input, setInput]= useState("")
	const [searchSuggestion, setSearchSuggestion] = useState([])

	useEffect(() => {
		GlobalApi.getMovieByName(input).then(res => {
			setSearchSuggestion(res.data.results)
			console.log(res.data.results)
		})
	}, [input])

	const handleClearSearch = () => {
		setInput("")
		setSearchSuggestion([])
	}

	return (
	<div className='flex gap-2 items-center '>
		<FaSearch id="search-icon" className="text-white" />
		<div className='
			flex
			text-white
			text-[15px]
			items-center
			font-semibold
			cursor-pointer
			hover:underline
			underline-offset-8
			 w-96
			'
		>
			<input
				className='input:focus outline-none  w-full
				bg-transparent
				shadow border-b py-1 px-3 white leading-tight focus:shadow-outline"
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
