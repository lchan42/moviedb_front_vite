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

function MovieCard({movie}) {
	const imgBaseUrl = "https://image.tmdb.org/t/p/w342"

	return (
		<>
			<img src={imgBaseUrl + movie.poster_path}
			className='
			w-[110px] md:w-[200px]
			rounded-lg
			hover:border-[3px]
			border-grey-400
			hover:scale-110
			transition-all
			duration-1500
			ease-in
			'/>
		</>
	)
}

export default MovieCard
