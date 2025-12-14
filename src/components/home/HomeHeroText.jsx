import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
	return (
		<div className='pt-5 text-center'>
			<div className='text-[6vw] justify-center flex items-center uppercase leading-[5vw]'>Fashion in Motion.</div>
			<div className='text-[6vw] justify-center flex items-center uppercase leading-[5vw]'>Designed 
				<div className='h-[6vw] w-[17vw] rounded-full mt-1 mb-1 overflow-hidden'>
					<Video />
					</div> to Flow.</div>
			<div className='text-[6vw] justify-center flex items-center uppercase leading-[5vw]'>Crafted for Every Moment.</div>
		</div>
	)
}

export default HomeHeroText
