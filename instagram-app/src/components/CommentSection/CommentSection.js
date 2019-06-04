import React from "react";

import Comment from "./Comment";

import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      id: '',
      username: 'LadyKerr',
      text: ''
    }
  }

  addNewComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: this.state.comments.id,
      text: this.state.comments.text,
      username: this.state.comments.username
    }
    this.setState({
    comments: [...this.state.comments, newComment]
    })
  }

  commentChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
      return (
      <div>
        {this.props.comments.map(comment => (
          <Comment 
          comments={comment}
          key={comment.id}
          />
        ))}
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="text"
            onChange={this.commentChange}
            value={this.state.text}
            placeholder="Add a comment..."
            className="post-input"
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    )
  }
}

export default CommentSection;