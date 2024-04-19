import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";


function MovieList({genreId}) {
	// console.log("HERE \n")
	const elementRef = useRef(null)
	const screenWidth = window.innerWidth - 108

	const [movieList, setMovieList] = useState([])

	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then(res => {
			// console.log(res.data.results)
			setMovieList(res.data.results)
		})
	}
	useEffect(() =>{getMovieByGenreId()}, [])

	const sliderRight=(element) => {
		element.scrollLeft += screenWidth
	}

	const sliderLeft=(element) => {
		element.scrollLeft -= screenWidth
	}

  return (
	<div>
		{/* <HiOutlineChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer z-[100]'
			onClick={() => sliderLeft(elementRef.current)}/>

		<HiOutlineChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0 z-[100]'
			onClick={() => sliderRight(elementRef.current)}/> */}

		<div ref={elementRef} className='flex overflow-x-auto gap-8 no-scrollbar scroll-smooth pt-5 px-3 pb-5 cursor-pointer'>
			{movieList.map((item, index) => (
				<MovieCard movie={item} key={index}/>
			))}
		</div>
	</div>
  )
}

export default MovieList
