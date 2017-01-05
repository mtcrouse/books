import React from 'react';
import AwardBook from './AwardBook.jsx';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);

    this.getBooks = this.getBooks.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
  }

  getBooks() {
    this.props.getBooks();
  }

  getAwardBooks(awardId) {
    this.props.getAwardBooks(awardId);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            { this.props.awardName === 'nebula' ? (
              <th>Award Year</th>
            ) : (
              <th>Rank</th>
            )}
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map((book,index) => {
            return <AwardBook
              awardName={this.props.awardName}
              key={index}
              book={book}
              getBooks={this.getBooks}
              getAwardBooks={this.getAwardBooks}
             />;
          })}
        </tbody>
      </table>
    );
  }

}

export default AwardsTable;
