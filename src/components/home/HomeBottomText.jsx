import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
	<div className='flex items-center justify-center gap-2'>
	  <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-10 pb-5  border-white rounded-full uppercase'>
		<Link className='text-[4vw] mt-6' to='/projects'>Projects</Link>
	  </div>
	  <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-28 flex items-center px-10 pb-5 border-white rounded-full uppercase'>
	  <Link className='text-[4vw] mt-6' to='/agence'>Agence</Link>
	  </div>
	</div>
  )
}

export default HomeBottomText
