import React from "react";

class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChanges = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  render () {
      return(
        <React.Fragment>
        <form onSubmit={this.props.signIn}>
          <input
            className="username" 
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChanges}
          />

          <input
            className="password" 
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    )
  }
}

export default LoginPage;