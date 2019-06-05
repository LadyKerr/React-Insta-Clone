import React from 'react';
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate (PostPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
  
}

export default App;
