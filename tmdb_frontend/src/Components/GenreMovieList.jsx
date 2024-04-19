import React from "react";
import { useStoreCtx } from '../Context/ContextProvider';
import MovieList from "./MovieList";
// import { movieGenresList, tvShowGenresList } from "../Context/ContextProvider";

function GenreMovieList() {

	const { isLoading, movieGenresList, tvShowGenresList } = useStoreCtx();

	return (
		<div>
			{ movieGenresList.map(((item, index) => (
				<div key={item.id} className="p-8 px-8 md:px-16">
					<h2 className="text-[20px] text-white font-bold">{item.name}</h2>

					<MovieList genreId={item.id}/>
				</div>
			)))}
		</div>
	);
}

export default GenreMovieList;


	// console.log(isLoading)
	// if (movieGenresList.length >0) {
	// 	console.log(movieGenresList)
	// }
