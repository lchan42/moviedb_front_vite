import React from 'react'

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

  return (
	<div className="
		bg-zinc-800
		bg-opacity-70
		absolute
		top-[80px]
		rounded-md
		bg-header
		shadow-lg
		max-h-96
		max-w-96
		overflow-y-scroll">
		<div className=''>
			{search.map((movie, index) => (
				<div key={index} className="flex hover:bg-slate-950 px-1">
					{/* image */}
					<img src={imgBaseUrl + movie.poster_path}
					className='h-[72px] min-w-[102px] w-[102px] rounded-md' />
					{/* movie title */}

					<div className=' px-3 truncate'>
						<p>Title : {movie.title}</p>
						{movie.release_date}
					</div>
					{}
				</div>
			))}
		</div>
	</div>
  )
}

export default SearchBarSuggestion
