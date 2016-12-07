import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a href="/auth/linkedin">Sign In</a>
      </div>
    );
  }
}

export default SignIn;
