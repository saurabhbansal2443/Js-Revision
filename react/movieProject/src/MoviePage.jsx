import React from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {

   let{movieID}=useParams();
  return (
    <div className='text-6xl'>MoviePage {movieID}</div>
  )
}

export default MoviePage