import React from 'react';
import PostPage from "./components/PostContainer/PostPage";
import LoginPage from "./components/login/LoginPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate (PostPage)(LoginPage);

class App extends React.Component {
  state = {
    loggedIn: true
  }

  componentDidMount() {
    if(localStorage.getItem('loggedIn')) {
      localStorage.removeItem('loggedIn');
      this.setState({
        loggedIn: true
      });
    } else {
      
    }
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
