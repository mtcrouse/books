import React from 'react';
import AwardBook from './AwardBook.jsx';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.addBook = this.addBook.bind(this);
  }

  addBook() {
    this.props.addBook();
  }

  getAwardBooks() {
    this.props.getAwardBooks();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Award Year</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map((book,index) => {
            return <AwardBook
              key={index}
              book={book}
              addBook={this.addBook}
              getAwardBooks={this.getAwardBooks}
             />;
          })}
        </tbody>
      </table>
    );
  }

}

export default AwardsTable;
