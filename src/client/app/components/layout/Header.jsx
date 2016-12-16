import { Link } from 'react-router';
import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav id="navbar">
          <Link to="/">Book Tracker</Link>
        </nav>
      </div>
    );
  }

}

export default Header;
