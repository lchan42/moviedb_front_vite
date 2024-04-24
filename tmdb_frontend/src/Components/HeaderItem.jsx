import React from 'react'

function HeaderItem({name, Icon, ...rest }) {
  return (
	<div className='
		flex
		text-white
		text-[15px]
		items-center
		gap-2
		font-semibold
		cursor-pointer
		hover:underline
		underline-offset-8'
	>
		{/* Icon has been removed due to unsolvable dataSlot error */}
		{/* <Icon {...rest}/>  */}
		<h2 className='hidden md:block'>{name}</h2>
	</div>
  )
}
export default HeaderItem
