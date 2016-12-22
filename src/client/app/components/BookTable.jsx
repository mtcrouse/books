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
          {this.props.content.authors ? (
            <tr>
              <th>Author</th>
              <td>{this.props.content.authors.join(', ')}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
          {this.props.content.categories ? (
            <tr>
              <th>Genre</th>
              <td>{this.props.content.categories.join(', ')}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
          {this.props.content.publishedDate ? (
            <tr>
              <th>Year</th>
              <td>{this.props.content.publishedDate}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
          {this.props.content.description ? (
            <tr>
              <th>Description</th>
              <td>{this.props.content.description}</td>
            </tr>
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default BookTable;
