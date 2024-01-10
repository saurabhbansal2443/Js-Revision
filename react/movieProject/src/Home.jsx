import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'


const Home = () => {
    let [movieData, setMovieData] = useState([]);

    let getData = () => {

        
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTQzZGFmYmU3ZDU0NTQzZjJhMTQzZGY3MTIxNjYzZSIsInN1YiI6IjYyYjQ4YmE2YTU3ZDQzMDA1MTI5MDRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.no5qlG0nyulR_3EIOYkQtR2_a9MCjh83hBk_3zr6BPc'
                }
            };
    
            fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
                .then(response => response.json())
                .then(response => setMovieData(response.results))
                .catch(err => console.error(err));
        
        
    };

    useEffect(() => {
        getData();
    }, [])

      if(movieData.length == 0){
         return <Shimmer></Shimmer>
      }

    return (
        <div >
            <div className="banner min-h-screen-1/2">
                <Banner></Banner>
            </div>

            <div className="flex justify-around flex-wrap min-h-screen-1/2">
                {
                    movieData.map((obj)=>{
                        return <Link key={obj.id}  to={"/movie/" + obj.id}><MovieCard  obj={obj}></MovieCard></Link>
                    })
                
            }
            </div>

       

        </div>
    )
}

export default Home