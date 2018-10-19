import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import toastr from 'toastr';

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

    toastr.options = {
      positionClass: 'toast-bottom-right',
    };
  }

  changeBookOverview() {
    this.props.changeBookOverview(this.props.book);
  }

  changeStatus(event) {
    if (this.props.book.shelf === null) {
      const shelf = event.target.value;
      const data = { bookId: this.props.book.bookId, shelf };

      axios.post('/books/books_users', data)
        .then((_res) => {
          this.props.getBooks();
          this.props.getAwardBooks(this.awardId);
          toastr.success(`${this.props.book.title} was added to your ${shelf} shelf`);
        })
        .catch((err) => {
          toastr.error(`There was an error adding ${this.props.book.title} to your ${shelf} shelf`, 'Error!');
          console.log(err);
        });
    } else {
      const shelf = event.target.value;

      if (shelf === 'none') {
        this.deleteBook();
      } else {
        axios.patch(`/books/${this.props.book.bookId}`, { shelf })
          .then((_res) => {
            this.props.getBooks();
            this.props.getAwardBooks(this.awardId);
            toastr.success(`${this.props.book.title} was moved to your ${shelf} shelf`);
          })
          .catch((err) => {
            toastr.error(`There was an error moving ${this.props.book.title} to your ${shelf} shelf`, 'Error!');
            console.log(err);
          });
      }
    }
  }

  deleteBook() {
    const bookId = this.props.book.bookId;

    axios.delete(`/books/books_users/${bookId}`)
      .then((_res) => {
        this.props.getBooks();
        this.props.getAwardBooks(this.awardId);
        toastr.success(`${this.props.book.title} was deleted from your library`);
      })
      .catch((err) => {
        toastr.error(`There was an error deleting ${this.props.book.title} from your library`, 'Error!');
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

AwardBook.propTypes = {
  awardName: React.PropTypes.string.isRequired,
  book: React.PropTypes.object.isRequired,
  changeBookOverview: React.PropTypes.func.isRequired,
  getAwardBooks: React.PropTypes.func.isRequired,
  getBooks: React.PropTypes.func.isRequired,
};

export default AwardBook;
