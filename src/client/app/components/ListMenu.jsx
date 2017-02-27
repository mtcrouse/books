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
          <div className="six columns">
            <p className="left-align">
              Check this area for updated lists and guides to science fiction and
              fantasy genres, classics, and new discoveries. Navigate to individual
              lists to add books from those lists to your shelves, and for more
              information. Feel free to contact us with suggestions for future
              lists!
            </p>
          </div>
          <div className="six columns">
            <div className="row">
              <Link to="/nebula">Nebula Award for Best Novel</Link>
            </div>
            <div className="row">
              <Link to="/npr">NPR Top 100 Science Fiction and Fantasy Books</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="four columns">
            <img id="choose-shelf" src="app/images/choose-shelf.gif" alt="choose shelf" />
          </div>
          <div className="four columns">
            <br />
            <p>Mark books as uninterested, read, reading, or to read. choose
            from some of the greatest science fiction and fantasy books ever
            written and watch as your progress is updated in real time.</p>
          </div>
          <div className="four columns">
            <img id="sample-chart" src="app/images/sample-chart.gif" alt="sample chart" />
          </div>
        </div>
      </div>
    );
  }

}

export default ListMenu;
