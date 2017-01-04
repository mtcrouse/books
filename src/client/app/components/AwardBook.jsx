import React from 'react';

class AwardBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.book);
    return (
      <tr>
        <td>{this.props.book.awardYear}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td className="list-add-book">Add Book</td>
      </tr>
    );
  }
}

export default AwardBook;
