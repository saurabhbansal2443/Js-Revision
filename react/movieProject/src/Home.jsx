import React from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'

const Home = () => {
    return (
        <div className='h-screen' >
            <Banner></Banner>
            <div className="flex justify-around flex-wrap h-1/2">

                <MovieCard></MovieCard>
            </div>
            
        </div>
    )
}

export default Home