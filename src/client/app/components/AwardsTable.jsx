import React from 'react';
import AwardBook from './AwardBook.jsx';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
  }

  changeBookOverview(book) {
    this.props.changeBookOverview(book);
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
              changeBookOverview={this.changeBookOverview}
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
