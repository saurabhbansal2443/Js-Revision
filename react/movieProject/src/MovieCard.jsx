import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({obj}) => {
  let imagePath = "https://image.tmdb.org/t/p/w1280/"
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mx-3 my-3   min-h-full overflow-auto hover:scale-110 transition duration-500 cursor-pointer">
  <figure  ><Link to={"/movie/" + obj.id} ><img className='h-full' src={imagePath + obj.backdrop_path} alt="Shoes" /> </Link> </figure>
  <div  className="card-body mx-0 text-white ">
    <h2 className="card-title text-4xl">{obj.title}</h2>
    <p className='text-2xl'>{obj.overview}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" >Favourite</button>
    </div>
  </div>
</div>
  )
}

export default MovieCard