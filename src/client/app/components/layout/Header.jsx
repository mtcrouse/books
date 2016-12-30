import { Link } from 'react-router';
import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
          <Link to="/" id="logo" className="u-pull-left">Book Tracker</Link>
          <Link to="/books" className="u-pull-right header-item">Your Books</Link>
          <Link to="/profile" className="u-pull-right header-item">Profile</Link>
          <Link to="/addbooks" className="u-pull-right header-item">Search</Link>
      </header>
    );
  }

}

export default Header;
