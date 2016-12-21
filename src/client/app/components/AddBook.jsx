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

    let title = this.state.title.replace(/ /g, '+');
    let author = this.state.author.replace(/ /g, '+');

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+${author}`)
      .then(res => {
        this.props.addSearchResults(res.data.items);
      })
      .catch(err => {
        console.log(err);
      });

    // this.props.addBook(data);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.addBook}>
            <input type="text" placeholder="title" name="title" onChange={this.handleChange} />
            <input type="text" placeholder="author" name="author" onChange={this.handleChange} />
            <input type="number" placeholder="year" name="year" onChange={this.handleChange} />
            <button type="submit">SEARCH</button>
          </form>
        </div>

      </div>
    );
  }
}

export default AddBook;
