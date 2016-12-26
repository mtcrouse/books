import React from 'react';
import axios from 'axios';
import Book from './Book.jsx';
import ReadBooks from './ReadBooks.jsx';
import ToReadBooks from './ToReadBooks.jsx';
import ReadingBooks from './ReadingBooks.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortedBooks: this.props.books.slice(), sortOrder: '', bookshelf: 'read' };

    this.sortedBooks = this.sortedBooks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switchShelf = this.switchShelf.bind(this);
  }

  componentWillMount() {
    return this.sortedBooks(this.props.books.slice(), event.target.id);
  }

  getBookshelf() {
    if (this.state.bookshelf === 'read') {
      console.log('state is read');
    } else if (this.state.bookshelf === 'reading') {
      console.log('state is reading');
    } else if (this.state.bookshelf === 'to-read') {
      console.log('state is to-read');
    }
  }

  handleClick(event) {
    return this.sortedBooks(this.props.books.slice(), event.target.id);
  }

  sortedBooks(books, sortBy) {
    sortBy = sortBy.slice(3);
    const newSortedBooks = books.sort(function(a, b) {
      if (a.sortBy < b.sortBy) {
        return -1;
      }
      if (a.sortBy > b.sortBy) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === `${sortBy} ASC`) {
      newSortedBooks.reverse();
      this.setState({ sortOrder: `${sortBy} DESC` });
    } else {
      this.setState({ sortOrder: `${sortBy} ASC` });
    }

    this.setState({ sortedBooks: newSortedBooks });
  }

  switchShelf(event) {
    let clickedShelf = event.target.id;

    if (this.state.bookshelf !== clickedShelf) {
      this.setState( { bookshelf: clickedShelf });

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>Books</p>
          <button id="read" onClick={this.switchShelf}>Read</button>
          <button id="reading" onClick={this.switchShelf}>Reading</button>
          <button id="to-read" onClick={this.switchShelf}>To Read</button>
        </div>
        <div className="row">
          <div className="eight columns" id="book-table">
            <table>
              <thead>
                <tr>
                  <th id="th-title" onClick={this.handleClick}>Title</th>
                  <th id="th-author" onClick={this.handleClick}>Author</th>
                  <th id="th-genre" onClick={this.handleClick}>Genre</th>
                  <th id="th-year" onClick={this.handleClick}>Year</th>
                </tr>
              </thead>
              <tbody id="book-table-body">
                {this.state.sortedBooks.map((book,index) => {
                  return <Book key={index} book={book} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
