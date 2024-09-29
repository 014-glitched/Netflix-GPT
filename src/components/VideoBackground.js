import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../custom_Hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
    useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen">
        <iframe className="w-screen aspect-video" 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key} 
        title="YouTube video player" 
        allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground


// 73_1biulkYk?si=PaPMARcf7F0bbi40
