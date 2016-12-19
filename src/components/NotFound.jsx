import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>We couldn't find what you were looking for!</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NotFound;
