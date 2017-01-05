import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';

class Nebula extends React.Component {
  constructor(props) {
    super(props);

    this.getNebulaBooks = this.getNebulaBooks.bind(this);
    this.getBooks = this.getBooks.bind(this);
  }

  getBooks() {
    this.props.getBooks();
  }

  getNebulaBooks() {
    this.props.getNebulaBooks();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="cormorant left-align">Nebula Award for Best Novel</h3>
        </div>
        <div className="row">
          <p className="left-align">
            The Nebula Awards are given each year by the Science Fiction and
            Fantasy Writers of America (SFWA) for the best science fiction or
            fantasy fiction published in the United States during the previous
            year. The award has been described as one of "the most important of
            the American science fiction awards" and "the science-fiction and
            fantasy equivalent" of the Emmy Awards.
          </p>
        </div>
        <div className="row">
          <p className="left-align">
            Read: {this.props.nebulaReadCount} <br />
            Reading: {this.props.nebulaReadingCount} <br />
            To Read: {this.props.nebulaToReadCount}
          </p>
        </div>
        <div className="row">
          <div className="">
            <AwardsTable
              award="nebula"
              books={this.props.nebulaBooks}
              getBooks={this.getBooks}
              getNebulaBooks={this.getNebulaBooks}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default Nebula;
