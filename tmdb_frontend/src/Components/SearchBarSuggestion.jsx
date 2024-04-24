import React, { useState } from 'react'
import { useStoreCtx } from '../Context/ContextProvider';

/**
 *     "poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
 */

function SearchBarSuggestion({search, focusOnSearch}) {

	if (!search || !focusOnSearch) {
		return
	}

	const imgBaseUrl = "https://image.tmdb.org/t/p/w92"
	const { openDetailModal } = useStoreCtx();

  return (
	<div className="
		bg-zinc-800
		bg-opacity-80
		rounded-md
		bg-header
		shadow-lg
		max-h-[366px]
		w-full
		overflow-y-scroll
		no-scrollbar
		absolute">
		<div className=''>
			{search.map((movie, index) => (
				<div
					key={index}
					className="flex hover:bg-slate-950 px-1"
					onClick={() => openDetailModal(movie)}
				>
					{/* image */}
					<img loading="lazy" src={imgBaseUrl + movie.poster_path}
					className='h-[92px] min-w-[0px] w-auto rounded-md object-cover object-left-top ' />
					{/* movie title + date*/}
					<div className=' pl-3 overflow-hidden'>
						<p> {movie.title} ({ movie.release_date.slice(0, 4) }) </p>
					</div>
				</div>
			))}
		</div>
	</div>
  )
}

export default SearchBarSuggestion
