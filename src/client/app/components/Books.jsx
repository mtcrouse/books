import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Book from './Book.jsx';
import AddBook from './AddBook.jsx';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.addBook = this.addBook.bind(this);
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

  addBook(data) {
    const book = {
      title: data.title,
      author: data.author,
      subtitle: null,
      genre: 'fiction',
      publicationYear: 2000,
      language: 'English',
      originalLanguage: 'English'
    }
    axios.post('/books', book)
      .then((res) => {
        this.setState( { books: [res.data] } );
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('add book from books.jsx');
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
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
}

export default Books;
