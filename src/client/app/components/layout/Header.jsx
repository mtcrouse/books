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
      </header>
    );
  }

}

export default Header;
