import React from "react";

const Login = props => {
  return(
    <React.Fragment>
      <form>
        <input
        className="username" 
        name="username"
        type="text"
        placeholder="Username"
        />

        <input
        className="password" 
        name="password"
        type="password"
        placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  )
}

export default Login;