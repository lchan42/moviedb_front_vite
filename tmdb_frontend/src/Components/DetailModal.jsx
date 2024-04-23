import React, { useEffect, useState } from 'react'
import { useStoreCtx } from '../Context/ContextProvider';
import GlobalApi from '../Services/GlobalApi';
import { IoCloseOutline } from "react-icons/io5";


function DetailModal({ }) {

	const { openModal, setOpenModal, modalContent } = useStoreCtx();

	const [open, setOpen] = useState(true)



	if (!open) return null

	// -translate-x-1/2 -translate-y-1/2  ---> middle of the place

{/* <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"> */}

// justify-center
// bg-slate-700
// w-full h-full
// z-[1000]
// max-w-[90%]
// max-h-[80%]
// overflow-auto
// fixed
// ease-in-out
// top-2/5
// left-2/4
// -translate-x-1/2 -translate-y-1/2
// flex [box-shadow:0px_0px_18px_0px_rgba(0,_0,_0,_0.75)]
// rounded-[8px]
// hover:backdrop-filter backdrop-blur-[100px]


//mx-auto center the container
	return (
		<div
			className='
				w-screen
				 bg-black
				 bg-opacity-70
				justify-center
				items-center
				flex
				overflow-x-hidden overflow-y-auto
				fixed
				inset-0
				z-50
				outline-none
				focus:outline-none
			'
			onClick={() => setOpen(false)}
		>
			<div className="content container md:container md:mx-auto relative" onClick={(e) => e.stopPropagation()}>
				{/* close button */}
					<IoCloseOutline
						onClick={() => setOpen(false)}
						className=' cursor-pointer absolute size-5 right-0 text-white hover:size-7 '/>
					{/* image */}

					<img src={GlobalApi.imgBaseUrl+modalContent.backdrop_path} alt={modalContent.original_name+"img"}
						key={modalContent.id}
						className='
						w-full
						object-cover
						'
					/>

				{/* Detail*/}
				<div className="modalContent bg-zinc-900 text-slate-100 ">
					<div className="content">
						<h1>{modalContent.original_title}</h1>
						<p> {modalContent.release_date}</p>
						<p> {modalContent.overview}</p>
						<p> vote average: {modalContent.vote_average}</p>
						popularity
						vote_count
					</div>
					<div className="btnContainer">
						<button className=''>
							<span className='bold'> add to watchlist </span>
						</button>
					</div>

				</div>
			</div>
		</div>
	)
}

export default DetailModal
