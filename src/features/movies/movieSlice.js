import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import {APIkey} from '../../common/apis/MovieApiKey'


 export const fetchAsyncMovies= createAsyncThunk(
    'movies/fetchAsyncMovies',async(text)=>{
        
    const response =await movieApi.get(
      `?apikey=${APIkey}&s=${text}&type=movie`
    );
    //console.log(response.data)
   return response.data;
 })

 export const fetchAsyncShows= createAsyncThunk(
  'movies/fetchAsyncShows',async(text)=>{
     
  const response =await movieApi.get(
    `?apikey=${APIkey}&s=${text}&type=series`
  );
  // console.log(response.data)
 return response.data;
})

export const fetchAsyncShowsAndMoviesDetail = createAsyncThunk(
  'movies/fetchAsyncShowsAndMovieDetail',async(id)=>{
      
  const response =await movieApi.get(
    `?apikey=${APIkey}&i=${id}&Plot=full`
  );
  //  console.log(response.data)
 return response.data;
})

const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
       //action creaters
        removeSelectedMovieOrShow:(state)=>{
         state.selectedMovieOrShow= {}
        },
      },
    extraReducers:{
     [fetchAsyncMovies.pending]:()=>{
        console.log("Movies pending")
     },
     [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
        console.log('Movies fullfilled')
        return {...state,movies:payload}
     },
     [fetchAsyncMovies.rejected]:()=>{
        console.log("Movies rejected")
     },
     [fetchAsyncShows.pending]:()=>{
      console.log("Shows pending")
     },
     [fetchAsyncShows.fulfilled]:(state,{payload})=>{
      console.log('Shows fullfilled')
      return {...state,shows:payload}
     },
     [fetchAsyncShows.rejected]:()=>{
      console.log("Shows rejected")
     },
     [fetchAsyncShowsAndMoviesDetail.pending]:()=>{
      console.log("ShowsAndMoviesDetail pending")
     },
     [fetchAsyncShowsAndMoviesDetail.fulfilled]:(state,{payload})=>{
      console.log('ShowsAndMoviesDetail fullfilled')
      return {...state,selectedMovieOrShow:payload}
     },
     [fetchAsyncShowsAndMoviesDetail.rejected]:()=>{
      console.log("ShowsAndMoviesDetail rejected")
     },
    }
    
  
})

export const { removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies//state.slicename.initialstatename
export const getAllShows=(state)=>state.movies.shows
export const getSelectedShowsOrMovies=(state)=>state.movies.selectedMovieOrShow
export default movieSlice.reducer