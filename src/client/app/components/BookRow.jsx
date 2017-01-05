import React from 'react';
import axios from 'axios';

class BookRow extends React.Component {
  constructor(props) {
    super(props);

    this.changeStatus = this.changeStatus.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  changeStatus(event) {
    let shelf = event.target.value;

    if (shelf === 'delete') {
      this.deleteBook();
    } else {
      axios.patch(`/books/${this.props.book.bookId}`, { shelf })
        .then(res => {
          console.log('done patching');
          this.props.getBooks();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  deleteBook() {
    let bookId = this.props.book.bookId;

    axios.delete(`/books/books_users/${bookId}`)
      .then(res => {
        this.props.getBooks();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let status = this.props.book.shelf;

    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.genre}</td>
        <td>{this.props.book.publicationYear}</td>
        <td>
          <select defaultValue={status} onChange={this.changeStatus}>
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
