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
              Build your knowledge of classic and contemporary science fiction
              and fantasy novels and short stories. Grimoire shows you how many
              books you've read from top lists like Nebula and Hugo award winners.
            </div>
            <div className="four columns intro-column">
              Grimoire provides a place for fans of fantasy and science fiction
              to track their reading progress, but it uses the Google Books API
              to enable the tracking of books of any genre.
            </div>
            <div className="four columns intro-column">
              Join a community of readers passionate about other worlds. From
              the vast expanse of outer space to the fantastic worlds of Middle-earth
              or Westeros, get lost in a book today.
            </div>
          </div>
        </div>
        <div id="banner2" className="row">
          <div id="banner2-content">
            <p className="tagline">Start reading science fiction and fantasy today</p>
            <Link to="/signin"><button>Sign Up</button></Link>
          </div>
        </div>
        { this.props.isLoggedIn === true ? (
            <Redirect to="/profile" />
          ) : (
            <div></div>
          )
        }
      </div>
    );
  }
}

export default Intro;
