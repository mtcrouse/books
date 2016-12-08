import React from 'react';

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

    this.props.addBook(data);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addBook}>
          <input type="text" placeholder="title" name="title" onChange={this.handleChange} />
          <input type="text" placeholder="author" name="author" onChange={this.handleChange} />
          {/* <input type="number" placeholder="year" name="year" onChange={this.handleChange} /> */}
          <button type="submit">SUBMIT BOOK</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
