import React from 'react';
import axios from 'axios';

class AwardBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: this.props.book.shelf };

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(event) {
    if (this.props.book.shelf === null) {
      let shelf = event.target.value;
      this.setState( { status: shelf });
      let { title, author, subtitle, genre, language, originalLanguage, publicationYear, series, volume, bookId, shelf } = this.props.book;
      let data = { title, author, subtitle, genre, language, originalLanguage, publicationYear, series, volume, bookId, shelf };
      axios.post('/books', data)
        .then((res) => {
          const newBooks = this.props.books.concat([res.data]);
          this.props.addBook(newBooks);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let shelf = event.target.value;
      this.setState( { status: shelf });
      axios.patch(`/books/${this.props.book.bookId}`, { shelf })
        .then(res => {
          this.props.getBooks();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    let status = this.state.status;
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

    console.log(this.props.book);

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
