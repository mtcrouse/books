import React from 'react';
import { Link, Redirect } from 'react-router';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.signedIn = this.signedIn.bind(this);
  }

  signedIn() {
    if (this.props.isLoggedIn === true) {
      return <Redirect to="/profile" />
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div>
        <img id="banner" src="app/images/banner.jpg" alt="banner" />
        <div className="container">
          <div className="row">
            <div className="four columns intro-column">
              Track your sci-fi and fantasy reading
            </div>
            <div className="four columns intro-column">
              See how many books you've read out of the most celebrated science 
              fiction and fantasy novels of all time
            </div>
            <div className="four columns intro-column">
              Discuss your favorite books with other fans and change this column
              later
            </div>
          </div>
          <div>
            <this.signedIn />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
