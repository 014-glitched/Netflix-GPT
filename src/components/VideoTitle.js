import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black overflow-x-hidden'>
        <h1 className='font-bold text-4xl '>{title}</h1>
        <p className='py-4 w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-2 pr-9 pl-10 rounded-md mr-4 font-bold text-[20px] relative hover:bg-opacity-50 duration-200'>
                <img className='h-6 absolute left-2 top-[11px]' src="https://cdn.iconscout.com/icon/free/png-512/free-play-button-icon-download-in-svg-png-gif-file-formats--music-player-pack-entertainment-icons-2162464.png?f=webp&w=256" alt="" />
                Play</button>
            <button className='bg-gray-400 px-8 p-2 rounded-md text-black font-bold text-[20px] mt-2 opacity-50'>More Info!</button>
        </div>
    </div>
  )
}

export default VideoTitle