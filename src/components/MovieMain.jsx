import React from 'react'
import Gender from './Gender'
import movie from '../assets/peliculas.json'
const MovieMain = () => {
  return (
    <div>
        <img src={movie.imgsrc} alt="" />
        <Gender movie={movie}/>
        <span>
            {
                movie.resume
            }
        </span>
    </div>
  )
}

export default MovieMain