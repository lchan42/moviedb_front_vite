import React, { useRef } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";


function ScrollingChevron({direction, ref}) {

	// const elementRef = useRef()
	const screenWidth = window.innerWidth - 108

	const scrollLeft=(element) => {
		element.scrollLeft -= screenWidth

	}
		return (
			<>
				<HiOutlineChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer'
					onClick={() => scrollLeft(ref.current)}/>
			</>
		  )

}

export default {ScrollingChevron}
