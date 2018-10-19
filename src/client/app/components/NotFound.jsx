import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="map" className="row">
        <div id="map-content">
          <p className="tagline">Sorry, we couldn&apos;t find what you were looking for</p>
          <Link to="/"><button>Home</button></Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
