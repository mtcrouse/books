import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';

class Npr extends React.Component {

  constructor(props) {
    super(props);
    this.state = { awardBooks: [] };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
  }

  componentDidMount() {
    this.getAwardBooks();
  }

  getAwardBooks() {
    axios.get('/books/awards/2')
      .then((res) => {
        this.setState( { awardBooks: res.data } );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="">
            <AwardsTable award="npr" books={this.state.awardBooks} />
          </div>
        </div>
      </div>
    );
  }

}

export default Npr;
