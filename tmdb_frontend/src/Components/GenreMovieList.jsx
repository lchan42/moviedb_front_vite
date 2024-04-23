import React, { useEffect, useRef, useState } from "react";
import { useStoreCtx } from '../Context/ContextProvider';
import MovieList from "./MovieList";
import ScrollingChevron from "./ScrollingChevron";

function GenreMovieList() {

	const { movieGenresList, tvShowGenresList } = useStoreCtx();

	const movieListRefs = movieGenresList.map(() => useRef());

	return (
		<div>
			{ movieGenresList.map(((item, index) => (

				<div key={item.id} className="group">
					<ScrollingChevron elementRef={movieListRefs[index]} />
					<div className="p-8 px-8 md:px-16">
						<h2 className="text-[20px] text-white font-bold">{item.name}</h2>
						<MovieList genreId={item.id} ref={movieListRefs[index]}/>
					</div>

				</div>
			)))}
		</div>
	);
}

export default GenreMovieList;
