import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIkey} from '../../common/apis/MovieApiKey'
import {useDispatch} from 'react-redux'
import {addMovies} from '../../features/movies/movieSlice'



const Home=()=> {
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovies=async()=>{
      const movieText ="english"
      const response =await movieApi
      .get(
        `?apikey=${APIkey}&s=${movieText}&type=movie`
      )
      // console.log(response)
      
      .catch((err)=>{
        console.log("Err : ",err)
      })
      
       dispatch(addMovies(response.data))

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