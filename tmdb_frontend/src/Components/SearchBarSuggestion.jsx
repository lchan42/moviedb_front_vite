import React from 'react'
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


function SearchBarSuggestion({search}) {
	if (!search) {
		return
	}

	const imgBaseUrl = "https://image.tmdb.org/t/p/w154"
	const { openDetailModal } = useStoreCtx();

  return (
	<div className="
		bg-zinc-800
		bg-opacity-80
		rounded-md
		bg-header
		shadow-lg
		max-h-[360px]
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
					<img src={imgBaseUrl + movie.poster_path}
					className='h-[72px] min-w-[102px] w-[102px] rounded-md' />
					{/* movie title + date*/} {/* if notice too long title use truncate in className */}
					<div className=' px-3'>
						<p> {movie.title} ({ movie.release_date.slice(0, 4) }) </p>
					</div>
					{}
				</div>
			))}
		</div>
	</div>
  )
}

export default SearchBarSuggestion
