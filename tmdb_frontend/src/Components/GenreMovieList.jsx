import React, { useRef } from "react";
import { useStoreCtx } from '../Context/ContextProvider';
import MovieList from "./MovieList";
import ScrollingChevron from "./ScrollingChevron";
// import { movieGenresList, tvShowGenresList } from "../Context/ContextProvider";

function GenreMovieList() {

	const { isLoading, movieGenresList, tvShowGenresList } = useStoreCtx();
		const elementRef = useRef()
		// const inputRef = React.useRef(null);


		// onMouseEnter={(e) => e.currentTarget.classList.add('group-hover')}
		// onMouseLeave={(e) => e.currentTarget.classList.remove('group-hover')

	return (
		<div>

			{ movieGenresList.map(((item, index) => (

				<div key={item.id} className="group">
					<ScrollingChevron reference={elementRef.current} />
					<div className="p-8 px-8 md:px-16">
						<h2 className="text-[20px] text-white font-bold">{item.name}</h2>
						<MovieList genreId={item.id} ref={elementRef}/>
					</div>

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
