import React from "react";

import Comment from "./Comment";

import "./CommentSection.css";

class CommentSection extends React.Component {

  state = {
    comments: [],
    comment: '',
    username: ''
  }
  
  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      comment: '',
      username: 'LadyKerr'
    })
  }

  addNewComment = (event , index)=> {
    event.preventDefault();
    let newComment = {
      id: this.state.comments.length + 1,
      username: this.state.username,
      text: this.state.comment
    }
    this.setState({
          ...this.state,
        comments: [...this.state.comments, newComment]
    })
  }

  handleChanges = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  render() {
      return (
      <div>
        {this.state.comments.map(comment => (
          <Comment 
            comments={comment}
            key={comment.id}
          />
        ))}
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="comment"
            onChange={this.handleChanges}
            value={this.state.comment}
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