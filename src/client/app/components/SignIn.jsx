import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h3 className="cormorant left-align">Sign In</h3>
        <p className="left-align">
          Come on in!
        </p>
        <div className="row">
          <a href="/auth/signin"><button>Sign in</button></a>
        </div>
      </div>
    );
  }
}

export default SignIn;
