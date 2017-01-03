import React from 'react';
import Book from './Book.jsx';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year</th>
            <th>Add Book</th>
          </tr>
        </thead>
        <tbody>
          {this.props.books.map((book,index) => {
            return <Book key={index} book={book} />;
          })}
        </tbody>
      </table>
    );
  }

}

export default AwardsTable;
