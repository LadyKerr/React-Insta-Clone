import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

const Comment = props => {
  return (
    <div className="comment-container">
      {props.comments.id}
      {props.comments.text}
      {props.comments.username}
    </div>
  )
}

Comment.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Comment;