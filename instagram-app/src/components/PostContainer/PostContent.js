import React from "react"

class PostContent extends React.Component {
  state = {
    liked: false,
    likes: 0
  }

  toggleLike = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  likesIncrease = event => {
    event.preventDefault();
    const addOne = this.state.likes + 1;
    this.setState({likes: addOne})
  }

  render() {
    return (
      <div>
        <img
          className="post-img" 
          alt="post"
          src={this.props.image}
        />
        <div id="post-icons">
          <i className="far fa-comment"></i>
          {this.state.liked ? 
          <i onClick={this.toggleLike} className="fas fa-heart">
          </i> : <i onClick={this.toggleLike} className="far fa-heart">
          </i>}
        </div>
      <div className="post-likes">
        {this.props.likes} likes
      </div>
    </div>
   )
  }
}

export default PostContent;