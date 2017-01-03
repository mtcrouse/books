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
              Track your sci-fi and fantasy reading.
            </div>
            <div className="four columns intro-column">
              View analysis of your progress and something else stupid.
            </div>
            <div className="four columns intro-column">
              Discuss your favorite books with other fans.
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
