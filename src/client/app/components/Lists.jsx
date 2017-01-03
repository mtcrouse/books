import React from 'react';
import { Link } from 'react-router';

class Lists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to="/hugo">Hugo Award for Best Novel</Link>
        </div>
        <div className="row">
          <Link to="/nebula">Nebula Award for Best Novel</Link>
        </div>
        <div className="row">
          <Link to="/npr">NPR Top 100 Science Fiction and Fantasy Books</Link>
        </div>
      </div>
    );
  }

}

export default Lists;
