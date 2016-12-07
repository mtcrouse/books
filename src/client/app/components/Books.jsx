import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Book from './Book.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    axios.get('/books')
      .then((res) => {
        this.setState( { books: res.data } );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>Books</p>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book,index) => {
              return <Book key={index} book={book} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Books;
