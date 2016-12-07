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
        <Link to="/">&copy; Book Tracker</Link>
      </footer>
    );
  }

}

export default Footer;
