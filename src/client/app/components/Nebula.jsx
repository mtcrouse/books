import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';

class Nebula extends React.Component {

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
          <h3 className="cormorant u-pull-left">Nebula Award for Best Novel</h3>
        </div>
        <div className="row">
          <p className="u-pull-left">
            The Nebula Awards are given each year by the Science Fiction and
            Fantasy Writers of America (SFWA) for the best science fiction or
            fantasy fiction published in the United States during the previous
            year. The award has been described as one of "the most important of
            the American science fiction awards" and "the science-fiction and
            fantasy equivalent" of the Emmy Awards.
          </p>
        </div>
        <div className="row">
          <div className="">
            <AwardsTable award="nebula" books={this.state.awardBooks} />
          </div>
        </div>
      </div>
    );
  }

}

export default Nebula;
