import React from 'react';
import AwardsTable from './AwardsTable.jsx';

class Nebula extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="">
            <AwardsTable award="nebula" books={this.props.books} />
          </div>
        </div>
      </div>
    );
  }

}

export default Nebula;
