import React from "react";
import "./SearchBar.css";
import instalogo from "./instalogo.png";

const SearchBar = (props) => {
  return (
    <div className="search-bar-container">
      
      <div className="logo-cam">
        <i id="camera" className="fab fa-instagram"></i>
        <img 
          id="fab-logo"
          src= {instalogo}
          alt="insta-logo"
        />
      </div>

      <input 
        type="text"
        placeholder="Search"
        onChange={props.onChange}
        className="search-bar"
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