import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img
          src={BG_IMG}
          alt="logo"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch