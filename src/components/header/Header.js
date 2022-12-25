import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import user from "../../images/user.png";
import { fetchAsyncMovies,fetchAsyncShows } 
from "../../features/movies/movieSlice";

import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  

  const submitHandler = async(e) => {
    e.preventDefault();
    //console.log(typeof term)
     if(!term){
      return alert("please enter value in search")
     }
    dispatch(fetchAsyncShows(term));
    dispatch(fetchAsyncMovies(term));
    setTerm("")
    //console.log(term)
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
          ></input>

          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
