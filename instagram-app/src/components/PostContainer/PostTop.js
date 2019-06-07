import React from "react"
import styled from "styled-components";

const PostTopContainer = styled.div `
  display: flex;
`;

const ThumbImg = styled.img `
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 10px;
`;

const Username = styled.div `
  font-weight: 500;
  margin-top: 15px;
`;

const PostTop = props => {
  return (
    <PostTopContainer>
      <ThumbImg 
        alt="user"
        src={props.thumbnail}
      />
      <Username>
        {props.username}
      </Username>
    </PostTopContainer>
  )
}

export default PostTop;