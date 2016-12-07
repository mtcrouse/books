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
      return <Redirect to="/profile" />
    } else {
      return <Link to='/signin'><p className="link-option">Sign In</p></Link>
    }
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome to Book Tracker!</h1>
        <div id="below-welcome">
          <this.signedIn />
        </div>
      </div>
    );
  }
}

export default Intro;
