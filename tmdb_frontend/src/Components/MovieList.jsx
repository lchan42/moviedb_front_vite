import React, { forwardRef, useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'


const MovieList = React.forwardRef(({genreId}, ref) => {

	const [movieList, setMovieList] = useState([])

	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then(res => {
			setMovieList(res.data.results)
		})
	}
	useEffect(() =>{getMovieByGenreId()}, [])

  return (
	<div>
		<div
			ref={ref}
			className='
				flex
				overflow-x-auto
				gap-8
				no-scrollbar
				scroll-smooth
				pt-5 px-3 pb-5
				cursor-pointer
				'
		>
			{movieList.map((item, index) => (
				<MovieCard movie={item} key={index}/>
			))}
		</div>
	</div>
  )
})

export default MovieList
