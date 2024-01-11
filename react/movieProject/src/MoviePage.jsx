import React from 'react'
import { useParams } from 'react-router-dom';
import { SearchContext } from './Search';
import { useContext } from 'react';

const MoviePage = () => {
  let {o} = useContext(SearchContext);
  console.log("movie page " , o);
   let{movieID}=useParams();
  return (
    <div className='text-6xl'>MoviePage {movieID}</div>
  )
}

export default MoviePage