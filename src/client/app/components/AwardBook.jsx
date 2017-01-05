import React from 'react';
import axios from 'axios';

class AwardBook extends React.Component {
  constructor(props) {
    super(props);

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(event) {
    console.log(this.props.book);
    if (this.props.book.shelf === null) {
      let shelf = event.target.value;
      let data = { bookId: this.props.book.bookId, shelf };

      axios.post('/books/books_users', data)
        .then(res => {
          console.log('done posting to books_users');
          this.props.getBooks();
          this.props.getAwardBooks();
        })
        .catch(err => {
          console.log(err);
        });

    } else {
      let shelf = event.target.value;

      axios.patch(`/books/${this.props.book.bookId}`, { shelf })
        .then(res => {
          console.log('done patching');
          this.props.getBooks();
          this.props.getAwardBooks();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    let status = this.props.book.shelf;
    let rowClass;
    if (status === 'read') {
      rowClass = 'tr-completed';
    } else if (status === 'reading') {
      rowClass= 'tr-in-progress';
    } else if (status === 'to-read') {
      rowClass = 'tr-pending';
    } else {
      status = 'none';
    }

    return (
      <tr className={rowClass}>
        <td>{this.props.book.awardYear}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>
          <select defaultValue={status} onChange={this.changeStatus}>
            <option value="none">None</option>
            <option value="read">Read</option>
            <option value="reading">Reading</option>
            <option value="to-read">To Read</option>
          </select>
        </td>
      </tr>
    );
  }
}

export default AwardBook;