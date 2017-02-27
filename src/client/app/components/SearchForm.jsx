import React from 'react';
import axios from 'axios';
import toastr from 'toastr';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.searchBook = this.searchBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  searchBook(event) {
    event.preventDefault();
    this.props.addSearchResults([]);

    let data = { title: this.state.title,
      author: this.state.author,
    };

    let query = '';

    if (this.state.title) {
      query += `intitle:${this.state.title.replace(/ /g, '+')}`;
    }

    if (this.state.author) {
      if (query === '') {
        query += `inauthor:${this.state.author.replace(/ /g, '+')}`;
      } else {
        query += `+inauthor:${this.state.author.replace(/ /g, '+')}`;
      }
    }

    event.target.reset();
    this.setState({ title: '', author: '' });

    if (query === '') {
      toastr.error('Your search is empty!', 'Error');
      return;
    }

    query += '&maxResults=30&printType=books';

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => {
        this.props.addSearchResults(res.data.items);
      })
      .catch(err => {
        toastr.error('There was a problem performing your search', 'Error');
        console.log(err);
      });
  }

  render() {

    return (
      <div className="row">
        <form onSubmit={this.searchBook}>
          <input type="text" placeholder="title" name="title" onChange={this.handleChange} />
          <input type="text" placeholder="author" name="author" onChange={this.handleChange} />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
