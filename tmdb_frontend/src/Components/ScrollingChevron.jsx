import React, { forwardRef } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

function ScrollingChevron({reference}) {

	const screenWidth = window.innerWidth - 108


	const sliderLeft=(element) => {
		element.scrollLeft -= screenWidth
	}

	const sliderRight=(element) => {
		element.scrollLeft += screenWidth
	}

  return (
	<div className="ChevronClass">
		<HiOutlineChevronLeft
			// onClick={() => sliderRight(elementRef.current)}
			className='
				hidden
				md:block
				text-white text-[30px]
				absolute
				mx-8 mt-[250px]
				cursor-pointer
				opacity-0
				group-hover:opacity-100
				transition-opacity duration-1000
			'
		/>
		<HiOutlineChevronRight
			className='
				hidden
				md:block
				text-white text-[30px]
				absolute
				mx-8 mt-[250px]
				cursor-pointer
				right-0
				opacity-0
				group-hover:opacity-100
				transition-opacity duration-1000
			'
		/>

	</div>
  )
}

export default ScrollingChevron
