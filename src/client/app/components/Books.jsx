import React from 'react';
import axios from 'axios';
import Book from './Book.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortedBooks: this.props.books, sortOrder: '', bookshelf: '' };

    this.sortedBooks = this.sortedBooks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switchShelf = this.switchShelf.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.getBooks();
  }

  handleClick(event) {
    return this.sortedBooks(this.state.sortedBooks, event.target.id);
  }

  sortedBooks(books, sortBy) {
    sortBy = sortBy.slice(3);

    const newSortedBooks = books.sort(function(a, b) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
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
          <div className="row">
            <div className="three columns">
              Choose a shelf:
            </div>
            <div className="three columns">
              { this.state.bookshelf === 'read' ? (
                <button id="read" className="selected-shelf" onClick={this.switchShelf}>Read</button>
              ) : (
                <button id="read" className="" onClick={this.switchShelf}>Read</button>
              )
              }
            </div>
            <div className="three columns">
              { this.state.bookshelf === 'reading' ? (
                <button id="reading" className="selected-shelf" onClick={this.switchShelf}>Reading</button>
              ) : (
                <button id="reading" className="" onClick={this.switchShelf}>Reading</button>
              )
              }
            </div>
            <div className="three columns">
              { this.state.bookshelf === 'to-read' ? (
                <button id="to-read" className="selected-shelf" onClick={this.switchShelf}>To Read</button>
              ) : (
                <button id="to-read" className="" onClick={this.switchShelf}>To Read</button>
              )
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="" id="book-table">
            <table>
              <thead>
                <tr>
                  <th id="th-title" onClick={this.handleClick}>Title</th>
                  <th id="th-author" onClick={this.handleClick}>Author</th>
                  <th id="th-genre" onClick={this.handleClick}>Genre</th>
                  <th id="th-year" onClick={this.handleClick}>Year</th>
                  <th id="th-shelf" onClick={this.handleClick}>Status</th>
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
