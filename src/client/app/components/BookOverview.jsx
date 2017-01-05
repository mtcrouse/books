import React from 'react';
import axios from 'axios';

class BookOverview extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        {this.props.bookOverview.title}
      </div>
    );
  }
}

export default BookOverview;
