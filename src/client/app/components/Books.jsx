import React from 'react';
import axios from 'axios';
import BookRow from './BookRow';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: '',
      currentBooks: [],
      currentBookshelf: 'read',
    };

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.sortedBooks = this.sortedBooks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switchShelf = this.switchShelf.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  changeBookOverview(book) {
    this.props.changeBookOverview(book);
  }

  componentDidMount() {
    this.getBooks();
  }

  componentWillReceiveProps(nextProps) {
    const currentBooks = [];

    for (let i = 0; i < nextProps.books.length; i+= 1) {
      if (nextProps.books[i].shelf === this.state.currentBookshelf) {
        currentBooks.push(nextProps.books[i]);
      }
    }

    this.setState({ currentBooks });
  }

  getBooks() {
    this.props.getBooks();
  }

  handleClick(event) {
    return this.sortedBooks(this.state.currentBooks, event.target.id);
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

    this.setState({ currentBooks: newSortedBooks });
  }

  switchShelf(event) {
    const clickedShelf = event.target.id;
    const currentBooks = [];

    if (this.state.bookshelf !== clickedShelf) {
      this.setState({ currentBookshelf: clickedShelf });

      for (let i = 0; i < this.props.books.length; i++) {
        if (this.props.books[i].shelf === event.target.id) {
          currentBooks.push(this.props.books[i]);
        }
      }

      this.setState({ currentBooks });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="five columns">
            <h3 className="cormorant left-align">Your Books</h3>
          </div>
          <div className="seven columns">
            { this.state.currentBookshelf === 'read' ? (
              <button id="read" className="selected-shelf shelf-button" onClick={this.switchShelf}>Read</button>
            ) : (
              <button id="read" className="shelf-button" onClick={this.switchShelf}>Read</button>
            )
            }
            { this.state.currentBookshelf === 'reading' ? (
              <button id="reading" className="selected-shelf shelf-button" onClick={this.switchShelf}>Reading</button>
            ) : (
              <button id="reading" className="shelf-button" onClick={this.switchShelf}>Reading</button>
            )
            }
            { this.state.currentBookshelf === 'to-read' ? (
              <button id="to-read" className="selected-shelf shelf-button" onClick={this.switchShelf}>To Read</button>
            ) : (
              <button id="to-read" className="shelf-button" onClick={this.switchShelf}>To Read</button>
            )
            }
          </div>
        </div>
        <div className="row">
          <div className="twelve columns" id="book-table">
            <table>
              <thead>
                <tr>
                  <th id="th-title" onClick={this.handleClick}>Title</th>
                  <th id="th-author" onClick={this.handleClick}>Author</th>
                  <th id="th-year" onClick={this.handleClick}>Year</th>
                  <th id="th-shelf">Status</th>
                </tr>
              </thead>
              <tbody id="book-table-body">
                {this.state.currentBooks.map((book, index) => {
                  return <BookRow
                    key={index}
                    book={book}
                    getBooks={this.getBooks}
                    getCurrentBooks={this.getCurrentBooks}
                    changeBookOverview={this.changeBookOverview}
                  />;
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
