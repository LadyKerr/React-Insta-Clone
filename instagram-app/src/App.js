import React from 'react';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import './App.css';

class App extends React.Component {
  state = {
    postData: [],
    searchPost: []
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }
  
  search = event => {
  let searchFilter = this.state.postData.filter(post => {
    if(post.username.includes(event.target.value)) {
          return post;
      } else {
          return undefined;
      }
    })
    this.setState({
      searchPost: searchFilter
    })
  }

  render () {
    return (
      <div className="App">
        <SearchBar 
          search={this.search}
        />
        <PostContainer 
        postData = {this.state.postData}
        />
      </div>
    );
  }
  
}

export default App;
