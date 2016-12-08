import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <p>Profile</p>
        <Link to="/books">Books</Link>
        <p onClick={this.signOut}>Sign Out</p>
      </div>
    );
  }
}

export default Profile;
