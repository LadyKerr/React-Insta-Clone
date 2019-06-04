import React from 'react';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import './App.css';

class App extends React.Component {
  state = {
    postData: []
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }
    
  render () {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        postData = {this.state.postData}
        />
      </div>
    );
  }
  
}

export default App;
