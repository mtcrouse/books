import React from 'react';
import axios from 'axios';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addBook = this.addBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addBook(event) {
    event.preventDefault();
    let data = { title: this.state.title,
      author: this.state.author
    };

    let query = '';

    if (this.state.title) {
      query += `intitle:${this.state.title.replace(/ /g, '+')}`;
    }

    if (this.state.author && query !== '') {
      query += `+inauthor:${this.state.author.replace(/ /g, '+')}`
    } else if (this.state.author && query === '') {
      query += `inauthor:${this.state.author.replace(/ /g, '+')}`
    }

    query += `&maxResults=25&printType=books`;

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => {
        this.props.addSearchResults(res.data.items);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.addBook}>
          <input type="text" placeholder="title" name="title" onChange={this.handleChange} />
          <input type="text" placeholder="author" name="author" onChange={this.handleChange} />
          <input type="number" placeholder="year" name="year" onChange={this.handleChange} />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
