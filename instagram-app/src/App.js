import React from 'react';
import PostPage from "./components/PostContainer/PostPage";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="App">
        <PostPage />
        />
      </div>
    );
  }
  
}

export default App;
