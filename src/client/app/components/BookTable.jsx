import React from 'react';

class BookTable extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{this.props.content.title}</td>
          </tr>
          <tr>
            <th>Author</th>
            <td>{this.props.content.authors.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BookTable;
