import React from 'react';
import { Link, Redirect } from 'react-router';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.checkIfSignedOut = this.checkIfSignedOut.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  changeBookOverview(event) {
    console.log(event.target);
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
          <h3 className="u-pull-left cormorant">Metta's Profile</h3>
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
            {currentlyReading.map((book,index) => {
              return <div key={index} className="row left-align">
                {book.title} by {book.author} ({book.publicationYear})
                <select value="reading" onChange={this.changeStatus} name={book.bookId}>
                  <option value="delete">Delete</option>
                  <option value="read">Read</option>
                  <option value="reading">Reading</option>
                  <option value="to-read">To Read</option>
                </select>
              </div>;
            })}
          </div>
        </div>
        { this.props.bookOverview ? (
          <div className="row left-align">
            Recently viewed: {this.props.bookOverview.title} by {this.props.bookOverview.author} ({this.props.bookOverview.publicationYear})
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
