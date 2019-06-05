import React from "react"

class PostContent extends React.Component {
  state = {
    liked: false
  }

  toggleLike = () => {
    this.setState({
      liked: !this.state.liked
    })
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