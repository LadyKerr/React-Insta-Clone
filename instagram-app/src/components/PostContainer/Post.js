import React from "react";

import "./PostContainer.css";

import PostTop from "./PostTop";
import PostContent from "./PostContent";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return (
    <div className="post-border">
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
    </div>
  )
}

export default Post;