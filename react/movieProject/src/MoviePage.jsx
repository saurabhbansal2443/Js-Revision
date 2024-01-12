import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import { SearchContext } from './Search';
import { useContext } from 'react';

const MoviePage = () => {
    let [obj ,setObj ] = useState({});
  let { o } = useContext(SearchContext);
  console.log("movie page ", o);
  let { movieID } = useParams();

  useEffect(()=>{
    let targetObj = o.ogData.filter((obj)=>{
        return obj.id == movieID;
    })
    setObj(targetObj[0]);
    console.log(targetObj[0])
  },[])
  let imagePath = "https://image.tmdb.org/t/p/w1280/"
  return (
    <div className='text-3xl h-screen w-full flex justify-center items-center'>
      <div className="card card-side w-3/4 h-3/4 bg-base-100 shadow-xl">
        <figure className='w-3/4'><img className='h-full w-full' src={imagePath + obj.backdrop_path} alt="Movie" /></figure>
        <div className="card-body w-1/4 px-7 py-12 overflow-auto">
          <h2 className="card-title text-white text-6xl">{obj.title}</h2>
          <p className='text-white text-3xl mt-7'>{obj.overview}</p>

        </div>
      </div>
    </div>
  )
}

export default MoviePage