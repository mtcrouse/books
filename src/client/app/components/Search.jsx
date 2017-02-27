import React from 'react';
import axios from 'axios';
import toastr from 'toastr';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [] };

    this.postBook = this.postBook.bind(this);
    this.addSearchResults = this.addSearchResults.bind(this);
    this.noResultsFound = this.noResultsFound.bind(this);

    toastr.options = {
      positionClass: 'toast-bottom-right',
    };
  }

  postBook(data) {
    axios.post('/books', data)
      .then((_res) => {
        toastr.success(`${data.title} was added to your ${data.shelf} shelf`, 'Success!');
        this.props.getBooks();
      })
      .catch((err) => {
        toastr.error('There was a problem adding your book', 'Error');
        console.log(err);
      });
  }

  addSearchResults(results) {
    this.setState({ searchResults: results });
  }

  noResultsFound() {
    toastr.error('No results found');

    return <div className="empty-div" />;
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
            <p>Search for some of your favorite books to start building your library!</p>
            <p>For the most accurate results, include both the title and author
              of the book that you want to search for.</p>
          </div>
        </div>
        <div className="row">
          {this.state.searchResults ? (
            this.state.searchResults.map((book, index) => {
              return <SearchResult key={index} book={book} postBook={this.postBook} />;
            })
          ) : (
            <this.noResultsFound />
          )}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  getBooks: React.PropTypes.func.isRequired,
};

export default Search;
