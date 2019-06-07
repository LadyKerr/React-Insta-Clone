import React from "react";
import PostTop from "./PostTop";
import PostContent from "./PostContent";
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components";
import "./PostContainer.css";

const PostBorder = styled.div `
  border: 1px solid gray;
  margin: 20px 0;
`;

const Post = props => {
  return (
    <PostBorder>
      <PostTop 
        username={props.postData.username}
        thumbnail={props.postData.thumbnailUrl}
      />
     <PostContent 
        image={props.postData.imageUrl}
        likes={props.postData.likes}
     />
      <CommentSection 
        comments={props.postData.comments}
      />
    </PostBorder>
  )
}

export default Post;