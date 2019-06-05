import React from 'react';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";


class PostPage extends React.Component {
  state = {
    postData: [],
    searchFilter: []
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }
  
  onChange = event => {
    const postData = this.state.postData.filter(post => {
     if(post.username.includes(event.target.value)) {
       return post;
      }
    })
    this.setState({searchFilter: postData})
  }

  render () {
    return (
      <div className="App">
        <SearchBar 
          onChange={this.onChange}
        />
        <PostContainer 
          postData = {
            this.state.searchFilter.length > 0
            ? this.state.searchFilter
            :this.state.postData
        }
        />
      </div>
    );
  }
  
}

export default PostPage;
