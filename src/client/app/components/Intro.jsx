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
      return <Link to='/signin'><button className="link-option">Sign In</button></Link>
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to Grimoire!</h1>
        <div>
          <this.signedIn />
        </div>
      </div>
    );
  }
}

export default Intro;
