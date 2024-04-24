import { useStoreCtx } from '../Context/ContextProvider';

function SearchResult({movies}) {
	const imgBaseUrl = "https://image.tmdb.org/t/p/w342"
	const { openDetailModal } = useStoreCtx();


	return (
		<div className='pt-10 p-4' >
			{movies.map((movie, index) => (
				<div
					key={index}
					className='group flex container md:container md:mx-auto hover:bg-zinc-700 hover:bg-opacity-70 rounded-md'
					onClick={() => openDetailModal(movie)}
				>
					<div className='flex-none' key={index}>
						<img className="w-[110px] md:w-[200px]
							rounded-lg
							group-hover:border-[3px]
							border-grey-400 "loading="lazy" src={imgBaseUrl + movie.poster_path}/>
					</div>
					<div className='pl-5 pt-2 col-span-3 text-white '>
						<h1 className=' text-2xl pb-5 font-extrabold '> {movie.title} </h1>
						<h1 className=' pt-2 pb-2'> {movie.overview} </h1>
					</div>
				</div>
			))}
		</div>
	)
}

export default SearchResult
