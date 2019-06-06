import React from "react";
import styled from "styled-components";
import instalogo from "../SearchBar/instalogo.png";

const FormContainer = styled.div `
  border: 3px solid #df5d86;
  width: 400px;
  height: 320px;
  margin: 200px auto;
  background: #fadedd;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 70px;
  position: relative;
  display: flex;
`;

const Form = styled.form `
  margin: 0 auto;
  padding-top: 10px;
`;

const LoginInput = styled.input `
  text-align: center;
  font-size: 1rem;
  line-height: 25px;
`;

const Button = styled.button `
  color: #ffffff;
  background: #df5d86;
  margin: 20px;
  padding: 10px;
  width: 100px;
  border-radius: 3px;
`;

const FormImage = styled.img `
  border: 2px solid #fadedd;
  width: 50%;
  height: 20%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

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
        <FormContainer>
          <Form onSubmit={this.props.signIn}>
            <FormImage src= {instalogo} alt="insta-logo"/>
            <LoginInput
              name="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChanges}
            />

            <LoginInput 
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChanges}
            />
            <Button type="submit">Login</Button>
          </Form>
      </FormContainer>
    )
  }
}

export default LoginPage;