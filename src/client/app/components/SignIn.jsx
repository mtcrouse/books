import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <a href="/auth/linkedin">Sign in with LinkedIn</a>
      </div>
    );
  }
}

export default SignIn;
