import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import "./CommentSection.css";

const CommentContainer = styled.div `
  text-align: left;
  margin-left: 4px;
`;

const CommentUsername = styled.strong `
   margin-right: 10px;
`;


const Comment = props => {
  return (
    <CommentContainer>
      <p>
        <CommentUsername className="comment-username">{props.comments.username}</CommentUsername>
        {props.comments.text}
        </p>
    </CommentContainer>
  )
}

Comment.propTypes = {
    comments: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Comment;