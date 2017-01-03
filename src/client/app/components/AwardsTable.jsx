import React from 'react';

class AwardsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <thead>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Add Book</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    );
  }

}

export default AwardsTable;
