import { useEffect, useState } from "react";
import DetailModal from "../Components/DetailModal"
import GenreMovieList from "../Components/GenreMovieList"
import Header from "../Components/Header"
import GlobalApi from "../Services/GlobalApi"
import SearchResult from "../Components/SearchResult";
import { useParams } from "react-router-dom";


// example of page : http://localhost:5173/search?search_query=test2

function Search() {
	const searchParams = new URLSearchParams(location.search);
	const { search_query } = useParams();
	const searchQuery = searchParams.get('search_query');
	const [movies, setMovies] = useState([])

	useEffect(() => {
		if (searchQuery) {
			GlobalApi.getMovieByName(searchQuery)
			.then(res => { setMovies(res.data.results) })
			.catch(error => { console.error('Error fetching search results:', error) })
		}

	}, [searchQuery])


	return (
	<>
		<Header/>
		<SearchResult movies={movies}/>

		<DetailModal/>

	</>
	)
}

export default Search
