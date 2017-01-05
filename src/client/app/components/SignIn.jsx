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
          There's no need to make a new account in order to use Grimoire -- just
          sign in with your LinkedIn account and we'll remember all of your
          reading progress! We are in the process of allowing users to sign in
          with Google and Facebook accounts, as well.
        </p>
        <div className="row">
          <button><a href="/auth/linkedin">Sign in with LinkedIn</a></button>
        </div>
      </div>
    );
  }
}

export default SignIn;
