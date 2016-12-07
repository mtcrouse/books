import { Link } from 'react-router';
import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer id="footer">
        &copy; Book Tracker
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/signin"><li>Sign In</li></Link>
          <Link to="/profile"><li>Profile</li></Link>
        </ul>
      </footer>
    );
  }

}

export default Footer;
