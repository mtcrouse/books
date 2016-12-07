import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Profile</p>
        <Link to="/books">Books</Link>
      </div>
    );
  }
}

export default Profile;
