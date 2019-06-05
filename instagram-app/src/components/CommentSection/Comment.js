import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

const Comment = props => {
  return (
    <div className="comment-container">
      <p>
        <strong className="comment-username">{props.comments.username}</strong>
        {props.comments.text}
        </p>
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