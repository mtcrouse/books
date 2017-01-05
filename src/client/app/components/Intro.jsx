import React from 'react';
import { Link, Redirect } from 'react-router';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="banner" className="row">
          <br />
          <p id="big-title" className="cormorant">Grimoire</p>
          <p className="tagline">Keep track of your favorite science fiction and fantasy books</p>
        </div>
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
          { this.props.isLoggedIn === true ? (
              <Redirect to="/profile" />
            ) : (
              <div></div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Intro;
