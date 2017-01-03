import React from 'react';
import axios from 'axios';
import SearchBook from './SearchBook.jsx';
import SearchResult from './SearchResult.jsx';

class AddBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [] };

    this.addBook = this.addBook.bind(this);
    this.addSearchResults = this.addSearchResults.bind(this);
  }

  addBook(data) {
    axios.post('/books', data)
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
          <div className="six columns">
            <SearchBook addSearchResults={this.addSearchResults} />
          </div>
          <div className="six columns">
            Put something here.
          </div>
        </div>
        <div className="row">
          {this.state.searchResults.map((book,index) => {
            return <SearchResult key={index} book={book} addBook={this.addBook} />;
          })}
        </div>
      </div>
    );
  }
}

export default AddBooks;
