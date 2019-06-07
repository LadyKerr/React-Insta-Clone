import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostWrapper = styled.div `
  height: 500px;
  width: 50%;
  margin: 10px auto;
`;

const PostContainer = props => {
    return (
      <PostWrapper>
        {props.postData.map(post => (
        <Post 
          postData={post}
          key={post.id}
        />
        ))}
      </PostWrapper>
    )
}

PostContainer.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;

