import React from 'react';
import { Link, Redirect } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.checkIfSignedOut = this.checkIfSignedOut.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  signOut() {
    this.props.signOut();
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
          <h3>User Profile</h3>
        </div>
        <div className="row">
          <div className="four columns">
            <Link to="/books"><button>Your Books</button></Link>
          </div>
          <div className="four columns">
            <Link to="/addbooks"><button>Add A Book</button></Link>
          </div>
          <div className="four columns">
            <button onClick={this.signOut}>Sign Out</button>
          </div>
        </div>
        <div className="row">
          <Link to="/lists"><button>Lists</button></Link>
        </div>
        <this.checkIfSignedOut />
      </div>
    );
  }
}

export default Profile;
