import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';

class NPR extends React.Component {
  constructor(props) {
    super(props);

    this.getNPRBooks = this.getNPRBooks.bind(this);
    this.getBooks = this.getBooks.bind(this);
  }

  getBooks() {
    this.props.getBooks();
  }

  getNPRBooks() {
    this.props.getNPRBooks();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="cormorant left-align">NPR Top 100 Science Fiction and Fantasy Books</h3>
        </div>
        <div className="row">
          <p className="left-align">
            The NPR Top 100 Science Fiction and Fantasy Books was voted on by
            NPR readers in 2011.
          </p>
        </div>
        <div className="row">
          <p className="left-align">
            Read: {this.props.nprReadCount} <br />
            Reading: {this.props.nprReadingCount} <br />
            To Read: {this.props.nprToReadCount}
          </p>
        </div>
        <div className="row">
          <div className="">
            <AwardsTable
              award="npr"
              books={this.props.nprBooks}
              getBooks={this.getBooks}
              getNPRBooks={this.getNPRBooks}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default NPR;
