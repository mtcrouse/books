import React from 'react';
import axios from 'axios';
import AddBook from './AddBook.jsx';
import SearchResult from './SearchResult.jsx';

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [] };

    this.addBook = this.addBook.bind(this);
    this.addSearchResults = this.addSearchResults.bind(this);
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
        const newBooks = this.props.books.concat([res.data]);
        this.props.addBook(newBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addSearchResults(results) {
    this.setState( { searchResults: results });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <AddBook addBook={this.addBook} addSearchResults={this.addSearchResults} />
          </div>
        </div>
        <div className="row">
          {this.state.searchResults.map((book,index) => {
            return <SearchResult key={index} book={book} />;
          })}
        </div>
      </div>
    );
  }
}

export default AddBooks;
