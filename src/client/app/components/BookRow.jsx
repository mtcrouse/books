import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import toastr from 'toastr';

class BookRow extends React.Component {
  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    toastr.options = {
      "positionClass": "toast-bottom-right",
    }
  }

  changeBookOverview() {
    this.props.changeBookOverview(this.props.book);
  }

  changeStatus(event) {
    let shelf = event.target.value;

    if (shelf === 'delete') {
      this.deleteBook();
    } else {
      axios.patch(`/books/${this.props.book.bookId}`, { shelf })
        .then(res => {
          this.props.getBooks();
          toastr.success(`${this.props.book.title} was moved to your ${shelf} shelf`);
        })
        .catch(err => {
          toastr.error(`There was an error moving ${this.props.book.title} to your ${shelf} shelf`, 'Error!');
          console.log(err);
        });
    }
  }

  deleteBook() {
    let bookId = this.props.book.bookId;

    axios.delete(`/books/books_users/${bookId}`)
      .then(res => {
        this.props.getBooks();
        toastr.success(`${this.props.book.title} was deleted`);
      })
      .catch(err => {
        toastr.error(`There was an error deleting ${this.props.book.title}`, 'Error!');
        console.log(err);
      });
  }

  render() {
    let status = this.props.book.shelf;
    let rowClass;

    if (status === 'read') {
      rowClass = 'tr-completed';
    } else if (status === 'reading') {
      rowClass = 'tr-in-progress';
    } else if (status === 'to-read') {
      rowClass = 'tr-pending';
    } else {
      status = 'none';
    }

    return (
      <tr className={rowClass}>
        <td>
          <Link to="/bookoverview">
            <span onClick={this.changeBookOverview}>{this.props.book.title}</span>
          </Link>
        </td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.publicationYear}</td>
        <td>
          <select value={status} onChange={this.changeStatus}>
            <option value="delete">Delete</option>
            <option value="read">Read</option>
            <option value="reading">Reading</option>
            <option value="to-read">To Read</option>
          </select>
        </td>
      </tr>
    );
  }
}

export default BookRow;
