import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover opacity-70' autoPlay loop muted src="/cloth.mp4"></video>
    </div>
  )
}

export default Video