import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import ScrollingChevron from './ScrollingChevron';

function Slider() {
	const imgBaseUrl = "https://image.tmdb.org/t/p/original"
	const[movieList, setMovieList] = useState([])
	const elementRef = useRef()

	useEffect(()=>{
		getTrendingMovies()
	}, [])

	const getTrendingMovies = () => {
		GlobalApi.getTrendingVideos.then(res => {
			setMovieList(res.data.results)
		})
	}

	return (
		<div className="group">
			<ScrollingChevron elementRef={elementRef} />
			<div
				ref={elementRef}
				className='
					flex
					overflow-x-auto
					w-full
					px-16 py-4
					no-scrollbar scroll-smooth
					cursor-pointer
					'
				>
				{movieList.map((item, index) => (
					<img
						src={imgBaseUrl+item.backdrop_path} alt={item.original_name+"img"}
						key={item.id}
						className='min-w-full md:h-[500px]
						object-cover
						object-left-top
						mr-5
						rounded-md
						hover:border-[4px]
						border-gray-400
						transition-all duration-100 ease-in
						'
					/>
				))}
			</div>
		</div>
	)
}

export default Slider



// {props.movies.map((movie, index) => (
// 	<div key={movie.id} className="d-flex justify-content-start m-3">
// 		<img
// 			style={imgStyle}
// 			src={APIimgUrl+movie.poster_path}
// 		/>
// 		<div
// 			onClick={() => props.handleAddFavorite(movie)}
// 			className='overlay d-flex align-items-center justify-content-center'
// 		>
// 			<FavoriteComponent />
// 		</div>
// 	</div>
// ))}
