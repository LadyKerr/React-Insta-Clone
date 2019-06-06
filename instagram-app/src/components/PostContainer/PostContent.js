import React from "react";
import styled from "styled-components";

const PostImg = styled.img `
  height: 100%;
  width: 100%;
`;

const PostLikes = styled.div `
  font-weight: 500;
  text-align: left;
  margin: 10px;
`;

class PostContent extends React.Component {
  state = {
    liked: false,
    likes: this.props.likes
  }

  toggleLike = () => {
    const addOne = this.state.likes + 1;
    this.setState({
      liked: !this.state.liked,
      likes: addOne
    })
  }

  render() {
    return (
      <div>
        <PostImg
          alt="post"
          src={this.props.image}
        />
        <div id="post-icons">
          <i className="far fa-comment">
          </i>{this.state.liked ? 
          <i onClick={this.toggleLike} className="fas fa-heart"></i> 
          : <i onClick={this.toggleLike} className="far fa-heart">
          </i>}
        </div>
      <PostLikes>
        {this.state.likes} likes
      </PostLikes>
    </div>
   )
  }
}

export default PostContent;