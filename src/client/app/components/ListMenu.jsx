import React from 'react';
import { Link } from 'react-router';

class ListMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="cormorant left-align">Lists</h3>
        </div>
        <div className="row">
          <p className="left-align">
            Check this area for updated lists and guides to science fiction and
            fantasy genres, classics, and new discoveries. Navigate to individual
            lists to add books from those lists to your shelves, and for more
            information. Feel free to contact us with suggestions for future
            lists!
          </p>
        </div>
        <div className="row left-align">
          <Link to="/nebula">Nebula Award for Best Novel</Link>
        </div>
        <div className="row left-align">
          <Link to="/npr">NPR Top 100 Science Fiction and Fantasy Books</Link>
        </div>
      </div>
    );
  }

}

export default ListMenu;
