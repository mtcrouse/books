import React from 'react';
import axios from 'axios';
import toastr from 'toastr';
import { Link } from 'react-router';

class BookRow extends React.Component {
  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    toastr.options = {
      positionClass: 'toast-bottom-right',
    };
  }

  changeBookOverview() {
    this.props.changeBookOverview(this.props.book);
  }

  changeStatus(event) {
    const shelf = event.target.value;

    if (shelf === 'delete') {
      this.deleteBook();
    } else if (this.props.book.shelf === null) {
      const data = { bookId: this.props.book.bookId, shelf };

      axios.post('/books/books_users', data)
        .then((_res) => {
          this.props.getBooks();
          toastr.success(`${this.props.book.title} was added to your ${shelf} shelf`);
        })
        .catch((err) => {
          toastr.error(`There was an error adding ${this.props.book.title} to your ${shelf} shelf`, 'Error!');
          console.log(err);
        });
    } else {
      axios.patch(`/books/${this.props.book.bookId}`, { shelf })
        .then(() => {
          this.props.getBooks();
          toastr.success(`${this.props.book.title} was moved to your ${shelf} shelf`);
        })
        .catch((err) => {
          toastr.error(`There was an error moving ${this.props.book.title} to your ${shelf} shelf`, 'Error!');
          console.log(err);
        });
    }
  }

  deleteBook() {
    const bookId = this.props.book.bookId;

    axios.delete(`/books/books_users/${bookId}`)
      .then((_res) => {
        this.props.getBooks();
        toastr.success(`${this.props.book.title} was deleted from your library`);
      })
      .catch((err) => {
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
            <option value="delete">Uninterested</option>
            <option value="read">Read</option>
            <option value="reading">Reading</option>
            <option value="to-read">To Read</option>
          </select>
        </td>
      </tr>
    );
  }
}

BookRow.propTypes = {
  book: React.PropTypes.object.isRequired,
  changeBookOverview: React.PropType.func.isRequired,
  getBooks: React.PropType.func.isRequired,
};

export default BookRow;
