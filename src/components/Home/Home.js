import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } 
from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(fetchAsyncMovies()) 
    dispatch(fetchAsyncShows())
  },[dispatch]); // to reload when change happensin dispatch

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
