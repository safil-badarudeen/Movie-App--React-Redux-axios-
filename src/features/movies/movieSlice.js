import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import {APIkey} from '../../common/apis/MovieApiKey'


 export const fetchAsyncMovies= createAsyncThunk(
    'movies/fetchAsyncMovies',async()=>{
        const movieText = "Harry";
    const response =await movieApi.get(
      `?apikey=${APIkey}&s=${movieText}&type=movie`
    );
    //console.log(response.data)
   return response.data;
 })

 export const fetchAsyncShows= createAsyncThunk(
  'movies/fetchAsyncShows',async()=>{
      const showText = "Friends";
  const response =await movieApi.get(
    `?apikey=${APIkey}&s=${showText}&type=series`
  );
  // console.log(response.data)
 return response.data;
})

const initialState={
    movies:{},
    shows:{},
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
       //action creaters
        addMovies:(state,{payload})=>{
          state.movies=payload    
        },
      },
    extraReducers:{
     [fetchAsyncMovies.pending]:()=>{
        console.log("pending")
     },
     [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
        console.log('fullfilled')
        return {...state,movies:payload}
     },
     [fetchAsyncMovies.rejected]:()=>{
        console.log("rejected")
     },
     [fetchAsyncShows.pending]:()=>{
      console.log("pending")
     },
     [fetchAsyncShows.fulfilled]:(state,{payload})=>{
      console.log('fullfilled')
      return {...state,shows:payload}
     },
     [fetchAsyncShows.rejected]:()=>{
      console.log("rejected")
     },
    }
    
  
})

export const { addMovies} = movieSlice.actions
export const getAllMovies=(state)=>state.movies.movies
export const getAllShows=(state)=>state.movies.shows
export default movieSlice.reducer