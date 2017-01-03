import { Link } from 'react-router';
import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
          <Link to="/" id="logo" className="u-pull-left cormorant">Grimoire</Link>
          { this.props.isLoggedIn === true ? (
            <div>
              <Link to="/books" className="u-pull-right header-item">Your Books</Link>
              <Link to="/profile" className="u-pull-right header-item">Profile</Link>
              <Link to="/addbooks" className="u-pull-right header-item">Search</Link>
            </div>
          ) : (
            <Link to="/signin" className="u-pull-right header-item cormorant">Sign In</Link>
          )}

      </header>
    );
  }

}

export default Header;
