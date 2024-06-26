import React, { useEffect, useState } from 'react'
import { useStoreCtx } from '../Context/ContextProvider';
import GlobalApi from '../Services/GlobalApi';
import { IoCloseOutline } from "react-icons/io5";

function DetailModal() {

	const { openModal, modalContent, openDetailModal, closeDetailModal } = useStoreCtx();

	if (!openModal || modalContent === undefined) return null

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
			onClick={() => closeDetailModal(false)}
		>
			<div
				className="content container relative md:container md:mx-auto "
				onClick={(e) => e.stopPropagation()}
			>
				{/* close button */}
				<IoCloseOutline
					onClick={() => closeDetailModal(false)}
					className=' cursor-pointer absolute size-5 right-0 text-white hover:size-7'/>
				{/* poster */}
					<img src={GlobalApi.imgBaseUrl+modalContent.backdrop_path} alt={modalContent.original_name+" img"}
						key={modalContent.id}
						className='
							w-full
							object-cover
							rounded-t-lg
						'
					/>
				{/* Detail*/}
				<div className="modalContent bg-zinc-900 rounded-b-lg text-slate-100 flex overflow-hide">
					<div className="content pt-5 pb-5 pl-10 pr-10">
						<h1 className='text-4xl font-extrabold pt-2 pb-2'>{modalContent.title}</h1>
						<p className=' '> {modalContent.release_date}</p>
						<p className=' pt-2 pb-2'> {modalContent.overview}</p>
						<p> vote average : {modalContent.vote_average}</p>
						<p> popularity : {modalContent.popularity}</p>
					</div>
					{/* <div className="btnContainer pt-2 pb-2">
						<button className=''>
							<span className=''> add to watchlist </span>
						</button>
					</div> */}

				</div>
			</div>
		</div>
	)
}

export default DetailModal;
