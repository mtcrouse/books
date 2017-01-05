import { Link } from 'react-router';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <header>
          <Link to="/" id="logo" className="u-pull-left cormorant">Grimoire</Link>
          { this.props.isLoggedIn === true ? (
            <div>
              <Link to="/" onClick={this.signOut} className="u-pull-right header-item cormorant">Sign Out</Link>
              <Link to="/books" className="u-pull-right header-item cormorant">Your Books</Link>
              <Link to="/lists" className="u-pull-right header-item cormorant">Lists</Link>
              <Link to="/profile" className="u-pull-right header-item cormorant">Profile</Link>
              <Link to="/search" className="u-pull-right header-item cormorant">Search</Link>
            </div>
          ) : (
            <Link to="/signin" className="u-pull-right header-item cormorant">Sign In</Link>
          )}
      </header>
    );
  }

}

export default Header;
