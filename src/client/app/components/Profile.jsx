import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';
import BookRow from './BookRow.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.checkIfSignedOut = this.checkIfSignedOut.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  changeBookOverview(book) {
    this.props.changeBookOverview(book);
  }

  changeStatus(event) {
    let shelf = event.target.value;
    let bookId = Number(event.target.name);

    if (shelf === 'delete') {
      this.deleteBook(bookId);
    } else {
      axios.patch(`/books/${bookId}`, { shelf })
        .then(res => {
          console.log('done patching');
          this.props.getBooks();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  checkIfSignedOut() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />
    } else {
      return <div></div>
    }
  }

  componentDidMount() {
    this.props.getBooks();
    this.props.getCurrentUser();
  }

  deleteBook(bookId) {
    axios.delete(`/books/books_users/${bookId}`)
      .then(res => {
        this.props.getBooks();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let booksRead = this.props.books.filter((book) => {
      return book.shelf === 'read';
    });

    let currentlyReading = this.props.books.filter((book) => {
      return book.shelf === 'reading';
    });

    return (
      <div className="container">
        <div className="row">
          { this.props.currentUser === true ? (
            <h3 className="u-pull-left cormorant">{this.state.currentUser.firstName}'s Profile</h3>
          ) : (
            <h3 className="u-pull-left cormorant">Your Profile</h3>
          )}
        </div>
        <div className="row left-align">
            Total books read: {booksRead.length}
        </div>
        <div className="row left-align">
          <div className="three columns left-align">
            Currently reading:
          </div>
        </div>
        <div className="row left-align">
          <div className="nine columns offset-by-one">
            <table>
              <thead>
                <tr>
                  <th id="th-title" onClick={this.handleClick}>Title</th>
                  <th id="th-author" onClick={this.handleClick}>Author</th>
                  <th id="th-year" onClick={this.handleClick}>Year</th>
                  <th id="th-shelf">Change Status</th>
                </tr>
              </thead>
              <tbody id="book-table-body">
                {currentlyReading.map((book, index) => {
                  return <BookRow
                    key={index}
                    book={book}
                    getBooks={this.props.getBooks}
                    changeBookOverview={this.changeBookOverview}
                  />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        { this.props.bookOverview ? (
          <div className="row left-align">
            <div className="three columns left-align">
              Last viewed:
            </div>
            <div className="nine columns offset-by-one">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="book-table-body">
                  <BookRow
                    book={this.props.bookOverview}
                    getBooks={this.props.getBooks}
                    changeBookOverview={this.changeBookOverview}
                  />
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-div"></div>
        )}
        <this.checkIfSignedOut />
      </div>
    );
  }
}

export default Profile;
