import React from 'react'
import { useState ,useEffect } from 'react';
import Shimmer from './Shimmer';

const Banner = () => {
    let [movieData, setMovieData] = useState([]);
    let [random , setRandom] = useState(0);

    let getData = () => {

        
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQzZGFmYmU3ZDU0NTQzZjJhMTQzZGY3MTIxNjYzZSIsInN1YiI6IjYyYjQ4YmE2YTU3ZDQzMDA1MTI5MDRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.no5qlG0nyulR_3EIOYkQtR2_a9MCjh83hBk_3zr6BPc'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(response => setMovieData(response.results))
            .catch(err => console.error(err));
        
        
    };

    useEffect(() => {
        getData();
        let rn = Math.floor(Math.random()*10);
        setRandom(rn);
    }, [])

      if(movieData.length == 0){
         return <Shimmer></Shimmer>
      }
   
     
    return (
       <div  className='text-2xl text-white  bg-no-repeat bg-cover flex flex-col align-bottom justify-end' style={{ backgroundImage :`url(https://image.tmdb.org/t/p/w1280/${movieData[random].backdrop_path})` , height:"70vh"}}>
            <h2 className='ml-4 mb-8 text-6xl font-bold'> {movieData[random].title} </h2>
            <p className="ml-4 mb-8 text-4xl"> {movieData[random].overview} </p>
       </div>
    )
}

export default Banner