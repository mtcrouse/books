import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  doSignIn(event) {
    return;
  }

  render() {
    return (
      <div className="container">
        <h3 className="cormorant left-align">Sign In</h3>
        <div className="row">
          <div className="six columns">
            <form onSubmit={this.doSignIn}>
              <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
              <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
            </form>
            <a href="/auth/signin"><button>Sign In</button></a>
          </div>
          <div className="six columns">
            <form onSubmit={this.doSignIn}>
              <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
              <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
            </form>
            <a href="/auth/signin"><button>Create Account</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
