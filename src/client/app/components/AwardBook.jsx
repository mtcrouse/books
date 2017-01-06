import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class AwardBook extends React.Component {
  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.changeStatus = this.changeStatus.bind(this);

    if (this.props.awardName === 'nebula') {
      this.awardId = 1;
    } else if (this.props.awardName === 'npr') {
      this.awardId = 2;
    }
  }

  changeBookOverview() {
    this.props.changeBookOverview(this.props.book);
  }

  changeStatus(event) {
    if (this.props.book.shelf === null) {
      let shelf = event.target.value;
      let data = { bookId: this.props.book.bookId, shelf };

      axios.post('/books/books_users', data)
        .then(res => {
          this.props.getBooks();
          this.props.getAwardBooks(this.awardId);
        })
        .catch(err => {
          console.log(err);
        });

    } else {
      let shelf = event.target.value;

      if (shelf === 'none') {
        this.deleteBook();
      } else {
        axios.patch(`/books/${this.props.book.bookId}`, { shelf })
          .then(res => {
            console.log('done patching');
            this.props.getBooks();
            this.props.getAwardBooks(this.awardId);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  deleteBook() {
    let bookId = this.props.book.bookId;

    axios.delete(`/books/books_users/${bookId}`)
      .then(res => {
        this.props.getBooks();
        this.props.getAwardBooks(this.awardId);
      })
      .catch(err => {
        console.log(err);
      });
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
        { this.props.awardName === 'nebula' ? (
          <td>{this.props.book.awardYear}</td>
        ) : (
          <td>{this.props.book.rank}</td>
        )}
        <td>
          <Link to="/bookoverview">
            <span onClick={this.changeBookOverview}>{this.props.book.title}</span>
          </Link>
        </td>
        <td>{this.props.book.author}</td>
        <td>
          <select value={status} onChange={this.changeStatus}>
            <option value="none">Uninterested</option>
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
