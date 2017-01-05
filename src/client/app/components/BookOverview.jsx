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
          <h3 className="cormorant left-align">{this.props.bookOverview.title}</h3>
          by {this.props.bookOverview.author} <br />
          {this.props.bookOverview.publicationYear}
        </div>
      </div>
    );
  }
}

export default BookOverview;
