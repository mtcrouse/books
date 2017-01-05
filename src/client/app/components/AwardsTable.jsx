import React from 'react';
import AwardBook from './AwardBook.jsx';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);

    this.getBooks = this.getBooks.bind(this);
    this.getNebulaBooks = this.getNebulaBooks.bind(this);
    this.getNPRBooks = this.getNPRBooks.bind(this);
  }

  getBooks() {
    this.props.getBooks();
  }

  getNebulaBooks() {
    this.props.getNebulaBooks();
  }

  getNPRBooks() {
    this.props.getNPRBooks();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            { this.props.award === 'nebula' ? (
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
              award={this.props.award}
              key={index}
              book={book}
              getBooks={this.getBooks}
              getNebulaBooks={this.getNebulaBooks}
              getNPRBooks={this.getNPRBooks}
             />;
          })}
        </tbody>
      </table>
    );
  }

}

export default AwardsTable;
