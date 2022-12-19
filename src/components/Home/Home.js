import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIkey} from '../../common/apis/MovieApiKey'



const Home=()=> {

  useEffect(()=>{
    const fetchMovies=async()=>{
      const movieText ="Harry"
      const response =await movieApi
      .get(
        `?apikey=${APIkey}&s=${movieText}&type=movie`
      )
      // console.log(response)
      
      .catch((err)=>{
        console.log("Err : ",err)
      })
       console.log(response)

    }
    fetchMovies()
  },[])
  
  return (
    <div>
    <div className='banner-img'></div>
    <MovieListing/>
    </div>
  )
}

export default Home