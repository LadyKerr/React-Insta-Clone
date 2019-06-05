import React from "react";
import "./SearchBar.css";

import logo from "./logo.png";

const SearchBar = (props) => {
  return (
    <div className="search-bar-container">
      
      <div className="logo">
      <img 
        id="fab-logo"
        src= {logo}
        alt="insta-logo"
      />
      </div>

      <input 
        type="text"
        placeholder="Search"
        onChange={props.search}
      />

      <div className="icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

export default SearchBar;