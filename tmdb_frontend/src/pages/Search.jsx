import { useEffect, useState } from "react";
import DetailModal from "../Components/DetailModal"
import GenreMovieList from "../Components/GenreMovieList"
import Header from "../Components/Header"
import GlobalApi from "../Services/GlobalApi"
import SearchResult from "../Components/SearchResult";


// example of page : http://localhost:5173/search?search_query=test2

function Search() {
	const searchParams = new URLSearchParams(location.search);
	const searchQuery = searchParams.get('search_query');
	const [movies, setMovies] = useState([])

	console.log("search param = ", searchQuery)

	useEffect(() => {
		GlobalApi.getMovieByName(searchQuery)
		.then(res => { setMovies(res.data.results) })
		.catch(error => { console.error('Error fetching search results:', error) })
	}, [])

	return (
	<>
		<Header/>
		<SearchResult movies={movies}/>

		<DetailModal/>


		{/* <GenreMovieList/> */}
	</>
	)
}

export default Search
