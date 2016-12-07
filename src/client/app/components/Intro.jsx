import React from 'react';
import { Link, Redirect } from 'react-router';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signedIn = this.signedIn.bind(this);
  }

  signedIn() {
    if (this.props.isLoggedIn === true) {
      return <Link to='/profile'><li>Profile</li></Link>
    } else {
      return <Link to='/signin'><li>Sign In</li></Link>
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <ul id="link-options">
          <this.signedIn />
        </ul>
      </div>
    );
  }
}

export default Intro;
