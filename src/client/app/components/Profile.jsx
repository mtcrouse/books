import React from 'react';
import { Link, Redirect } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.checkIfSignedOut = this.checkIfSignedOut.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  checkIfSignedOut() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />
    } else {
      return <div></div>
    }
  }

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="u-pull-left cormorant">Metta's Profile</h3>
        </div>
        <div className="row">
            Books read: {this.props.books.length}
        </div>
        <div className="row">
            Member since: December 2016
        </div>
        <div className="row">
            List progress: :(
        </div>
        <this.checkIfSignedOut />
      </div>
    );
  }
}

export default Profile;
