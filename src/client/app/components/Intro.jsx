import React from 'react';
import { Link, Redirect } from 'react-router';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <ul id="link-options">
          <Link to='/profile'><li>Profile</li></Link>
          <Link to='/signin'><li>Sign In</li></Link>
          <li onClick={this.props.handleClick}>Click</li>
        </ul>
      </div>
    );
  }
}

export default Intro;
