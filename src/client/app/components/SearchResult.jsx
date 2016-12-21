import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.addBook = this.addBook.bind(this);
    this.moreInfo = this.moreInfo.bind(this);
  }

  addBook() {
    console.log(this.props.book.volumeInfo);
  }

  moreInfo() {
    console.log(this.props.book.volumeInfo);
  }

  render() {
    const title = this.props.book.volumeInfo.title;
    const authors = this.props.book.volumeInfo.authors;
    const genres = this.props.book.volumeInfo.categories;

    return (
      <div className="row search-result">
        <div className="three columns">
          <p>{title ? title : 'none'}</p>
        </div>
        <div className="three columns">
          {authors ? authors.map((author,index) => {return <p key={index}>{author}</p>;}) : 'none'}
        </div>
        <div className="three columns">
          {genres ? genres.map((genre, index) => { return <p key={index}>{genre}</p>; }) : 'none'}
        </div>
        <div className="three columns">
          <button onClick={this.moreInfo}>More Information</button>
          <button onClick={this.addBook}>Add Book</button>
        </div>
      </div>
    );
  }
}

export default SearchResult;
