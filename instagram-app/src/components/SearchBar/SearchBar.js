import React from "react";
import instalogo from "./instalogo.png";
import styled from "styled-components";
import "./SearchBar.css";

const SearchBarHeader = styled.header `
  border-bottom: px solid gray;
  height: 50px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const LogoHeader = styled.header `
  height: 50px;
`;

const LogoImage = styled.img `
   height: 85%;
`;

const SearchInput = styled.input `
  margin-right: 60px;
  width: 250px;
  height: 30px;
  text-align: center;
`;


const SearchBar = (props) => {
  return (
    <SearchBarHeader>
      
      <LogoHeader>
        <i id="camera" className="fab fa-instagram"></i>
        <LogoImage 
          id="fab-logo"
          src= {instalogo}
          alt="insta-logo"
        />
      </LogoHeader>

      <SearchInput 
        type="text"
        placeholder="Search"
        onChange={props.onChange}
      />

      <div className="icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </SearchBarHeader>
  )
}

export default SearchBar;