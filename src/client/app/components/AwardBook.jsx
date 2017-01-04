import React from 'react';

class AwardBook extends React.Component {
  constructor(props) {
    super(props);

    this.addBook = this.addBook.bind(this);
  }

  addBook() {
    console.log('fake adding book...');
  }

  render() {
    let status;
    let rowClass;
    if (this.props.book.shelf === 'read') {
      status = 'Read';
      rowClass = 'tr-completed';
    } else if (this.props.book.shelf === 'reading') {
      status = 'Reading';
      rowClass= 'tr-in-progress';
    } else if (this.props.book.shelf === 'to-read') {
      status = 'To Read';
      rowClass = 'tr-pending';
    } else {
      status = null;
    }

    return (
      <tr className={rowClass}>
        <td>{this.props.book.awardYear}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        { status === null ? (
          <td onClick={this.addBook}>Add Book</td>
        ) : (
          <td>{status}</td>
        )}
      </tr>
    );
  }
}

export default AwardBook;
