import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';

class Awards extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.blurb = this.blurb.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.heading = this.heading.bind(this);

    if (this.props.awardName === 'nebula') {
      this.awardId = 1;
    } else if (this.props.awardName === 'npr') {
      this.awardId = 2;
    }
  }

  blurb() {
    if (this.props.awardName === 'nebula') {
      return <p className="left-align">
        The Nebula Awards are given each year by the Science Fiction and
        Fantasy Writers of America (SFWA) for the best science fiction or
        fantasy fiction published in the United States during the previous
        year. The award has been described as one of "the most important of
        the American science fiction awards" and "the science-fiction and
        fantasy equivalent" of the Emmy Awards.
      </p>
    } else if (this.props.awardName === 'npr') {
      return <p className="left-align">
        The NPR Top 100 Science Fiction and Fantasy Books was voted on by
        NPR readers in 2011.
      </p>
    }
  }

  componentDidMount() {
    this.getAwardBooks(this.awardId);
  }

  getBooks() {
    this.props.getBooks();
  }

  getAwardBooks(awardId) {
    this.props.getAwardBooks(awardId);
  }

  heading() {
    if (this.props.awardName === 'nebula') {
      return <h3 className="cormorant left-align">Nebula Award for Best Novel</h3>
    } else if (this.props.awardName === 'npr') {
      return <h3 className="cormorant left-align">NPR Top 100 Science Fiction and Fantasy Books</h3>
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <this.heading />
        </div>
        <div className="row">
          <this.blurb />
        </div>
        <div className="row">
          <p className="left-align">
            Read: {this.props.awardReadCount} <br />
            Reading: {this.props.awardReadingCount} <br />
            To Read: {this.props.awardToReadCount}
          </p>
        </div>
        <div className="row">
          <AwardsTable
            awardName={this.props.awardName}
            books={this.props.awardBooks}
            getBooks={this.getBooks}
            getAwardBooks={this.getAwardBooks}
          />
        </div>
      </div>
    );
  }

}

export default Awards;
