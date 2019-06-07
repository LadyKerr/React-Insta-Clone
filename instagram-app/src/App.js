import React from 'react';
import PostPage from "./components/PostContainer/PostPage";
import LoginPage from "./components/login/LoginPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate (PostPage)(LoginPage);

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
  
}

export default App;
