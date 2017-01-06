import React from 'react';
import axios from 'axios';

class BookOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row left-align">
          <div className="six columns">
            <h3 className="cormorant left-align">{this.props.bookOverview.title}</h3>
            <p className="left-align">by {this.props.bookOverview.author} <br />
            {this.props.bookOverview.publicationYear}</p>
          </div>
          <div className="six columns">
            { this.props.bookOverview.googleImage ? (
              <img className="book-thumbnail" src={this.props.bookOverview.googleImage} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="row left-align">
          <div className="twelve columns">
            { this.props.bookOverview.googleDescription ? (
              <p>Description: {this.props.bookOverview.googleDescription}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookOverview;
