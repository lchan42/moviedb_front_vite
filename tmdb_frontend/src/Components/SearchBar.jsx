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
		<FaSearch id="search-icon"/>
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
			 w-96
			'
		>
			<input
				className='input:focus outline-none  w-full'
				placeholder="type to search..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{input !== "" && ( // Only show the cross icon if there's content in the input
			 	<FaTimes onClick={handleClearSearch} />
			)}
			<SearchBarSuggestion search={searchSuggestion}/>
		</div>
	</div>
	)
}

export default SearchBar
