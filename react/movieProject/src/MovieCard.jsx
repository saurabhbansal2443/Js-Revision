import React , {useContext , useState} from 'react';
import { Link } from 'react-router-dom';
import { SearchContext  } from './Search';


const MovieCard = ({ obj }) => {
  let imagePath = "https://image.tmdb.org/t/p/w1280/";
   let {f} = useContext(SearchContext);
   let {fav , setFav} = f;

   console.log(fav);

  let handlefav = (id) => {
      if(fav.includes(id)){

        let updatedArray = fav.filter((ele)=>{
             return ele!=id;
        })
        setFav(updatedArray);
      }else{
        let updatedArray = [...fav , id];
        setFav(updatedArray);
      }
  }
  return (
    <div className="card card-compact w-1/4 bg-base-100 shadow-xl mx-3 my-3   min-h-full overflow-auto hover:scale-110 transition duration-500 cursor-pointer">
      <figure  ><Link to={"/movie/" + obj.id} ><img className='h-full' src={imagePath + obj.backdrop_path} alt="Shoes" /> </Link> </figure>
      <div className="card-body mx-0 text-white ">
        <h2 className="card-title text-4xl">{obj.title}</h2>
        <p className='text-2xl'>{obj.overview}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-2xl" onClick={()=>{handlefav(obj.id)}} > {fav.includes(obj.id)== false ?"Add to favourite" : "Remove from favourite"} </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard