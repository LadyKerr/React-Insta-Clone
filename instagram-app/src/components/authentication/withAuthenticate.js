import React from "react";

const withAuthenticate = PostComp => LoginComp =>
  class extends React.Component {
    state = {
      loggedIn: false,
      usernameText: '',
      passwordText: ''
    }
  

    username = e => {
      this.setState({
        usernameText: e.target.value
      })
    }

    password = e => {
      this.setState({
        passwordText: e.target.value
      })
    }

    signIn = e => {
      e.preventDefault();
      localStorage.setItem('user', this.state.usernameText)
      localStorage.setItem('pass', this.state.passwordText)
      this.setState({
        loggedIn: true
      })
    }

    render() {
          if(this.state.loggedIn) {
            return <PostComp />
          } else {
          return <LoginComp 
            username={this.username} 
            password={this.password}
            signIn={this.signIn}
          />
        }
    }
  }


export default withAuthenticate;