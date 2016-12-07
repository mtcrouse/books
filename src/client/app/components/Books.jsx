import React from 'react';
import { Link } from 'react-router';

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
      </div>
    );
  }
}

export default Books;
