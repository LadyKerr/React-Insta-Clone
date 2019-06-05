import React from 'react';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import './App.css';

class App extends React.Component {
  state = {
    postData: [],
    search: ""
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // searchFilter = event => {
  //   const newFilter = this.state.postData.filter(post => {
  //     post.username.toLowerCase().includes(event.target.value.toLowerCase())
  //   })
  //   this.setState({filteredPost: newFilter})
  // }

  render () {
    return (
      <div className="App">
        <SearchBar 
          onChange={this.onChange}
          // searchFilter={this.searchFilter}
        />
        <PostContainer 
        postData = {this.state.postData}
        search = {this.state.search}
        // filteredPost = {this.state.filteredPost}
        // searchFilter={this.searchFilter}
        />
      </div>
    );
  }
  
}

export default App;
