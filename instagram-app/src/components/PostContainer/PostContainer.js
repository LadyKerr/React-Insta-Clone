import React from "react";
import Post from "./Post";

import PropTypes from "prop-types";

import "./PostContainer.css";

const PostContainer = props => {
  // const {search} = props.search;
  // if (search !== "" && props.postData.username.toLowerCase().indexOf(search.toLowerCase()) === -1) {
  //   return null
  // }

    return (
      <div className="post-container">
        {props.postData.map(post => (
        <Post 
          postData={post}
          key={post.id}
        />
        ))}
      </div>
    )
}

PostContainer.propTypes = {
  postData: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;

