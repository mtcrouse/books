import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="three columns">
          <p>{this.props.book.volumeInfo.title}</p>
        </div>
        <div className="three columns">
          <p>{this.props.book.volumeInfo.authors[0]}</p>
        </div>
        <div className="three columns">
          <p>{this.props.book.volumeInfo.authors[0]}</p>
        </div>
      </div>
    );
  }
}

export default SearchResult;
