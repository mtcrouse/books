import React from 'react';
import axios from 'axios';
import Book from './Book.jsx';
import ReadBooks from './ReadBooks.jsx';
import ToReadBooks from './ToReadBooks.jsx';
import ReadingBooks from './ReadingBooks.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortedBooks: this.props.books, sortOrder: '', bookshelf: 'read' };

    this.sortedBooks = this.sortedBooks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switchShelf = this.switchShelf.bind(this);
  }

  handleClick(event) {
    console.log(event.target.style);
    return this.sortedBooks(this.props.books, event.target.id);
  }

  sortedBooks(books, sortBy) {
    sortBy = sortBy.slice(3);
    const newSortedBooks = books.sort();

    this.setState({ sortOrder: sortBy });
    this.setState({ sortedBooks: newSortedBooks });
  }

  switchShelf(event) {
    let clickedShelf = event.target.id;
    let currentBookshelf = [];

    if (this.state.bookshelf !== clickedShelf) {
      this.setState( { bookshelf: clickedShelf });
    }

    for (let i = 0; i < this.props.books.length; i++) {
      if (this.props.books[i].shelf === event.target.id) {
        currentBookshelf.push(this.props.books[i]);
      }
    }

    return this.sortedBooks(currentBookshelf, 'th-title');
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
