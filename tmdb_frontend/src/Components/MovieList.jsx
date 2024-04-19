import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function MovieList({genreId}) {
	console.log("HERE \n")
	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then(res => {
			console.log(res.data.results)
		})
	}

	useEffect(() =>{getMovieByGenreId()}, [])
  return (
	<div>MovieList</div>
  )
}

export default MovieList
