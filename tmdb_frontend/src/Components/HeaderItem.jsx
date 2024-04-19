import React from 'react'

function HeaderItem({name, Icon, ...rest }) {
  return (
	<div className='
	text-white flex items-center gap-2
	text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
		{/* <Icon {...rest}/> */}
		<h2 className='hidden md:block'>{name}</h2>
	</div>
  )
}
export default HeaderItem
