import React from "react";

const withAuthenticate = PostComp => LoginComp =>
  class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <LoginComp />
          <PostComp />
        </React.Fragment>
      );
    }
  }


export default withAuthenticate;