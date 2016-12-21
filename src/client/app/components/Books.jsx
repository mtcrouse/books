import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Book from './Book.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortedBooks: this.props.books.slice(), sortOrder: '' };

    this.sortedBooks = this.sortedBooks.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <p>Books</p>
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
