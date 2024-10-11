import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (  //check if movies is not null
    <div className='bg-black'>
      <div className='-mt-48 relative pl-8 z-30 pb-4'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      {/* <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/> */}
      </div>
    </div>
    )
  )
}

export default SecondaryContainer