import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import SearchResult from './SearchResult.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [] };

    this.postBook = this.postBook.bind(this);
    this.addSearchResults = this.addSearchResults.bind(this);
  }

  postBook(data) {
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
          <h3 className="cormorant left-align">Book Search</h3>
        </div>
        <div className="row">
          <div className="six columns">
            <SearchForm addSearchResults={this.addSearchResults} />
          </div>
          <div className="six columns">
            Put something here.
          </div>
        </div>
        <div className="row">
          {this.state.searchResults.map((book,index) => {
            return <SearchResult key={index} book={book} postBook={this.postBook} />;
          })}
        </div>
      </div>
    );
  }
}

export default Search;
