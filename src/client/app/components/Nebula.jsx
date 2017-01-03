import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';

class Nebula extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
  }

  componentDidMount() {
    this.getAwardBooks();
  }

  getAwardBooks() {
    axios.get('/books/awards/1')
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
            {/* <AwardsTable award="nebula" books={this.state.awardBooks} /> */}
          </div>
        </div>
      </div>
    );
  }

}

export default Nebula;
