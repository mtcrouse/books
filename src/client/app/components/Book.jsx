import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.genre}</td>
        <td>{this.props.book.publicationYear}</td>
        <td>{this.props.book.shelf}</td>
      </tr>
    );
  }
}

export default Book;
