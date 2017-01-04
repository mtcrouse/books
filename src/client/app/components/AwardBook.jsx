import React from 'react';
import axios from 'axios';

class AwardBook extends React.Component {
  constructor(props) {
    super(props);

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(event) {
    console.log(event.target.value);
  }

  render() {
    let status = this.props.book.shelf;
    let rowClass;
    if (this.props.book.shelf === 'read') {
      rowClass = 'tr-completed';
    } else if (this.props.book.shelf === 'reading') {
      rowClass= 'tr-in-progress';
    } else if (this.props.book.shelf === 'to-read') {
      rowClass = 'tr-pending';
    }

    return (
      <tr className={rowClass}>
        <td>{this.props.book.awardYear}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        { status === null ? (
          <td>
            <select defaultValue="none" onChange={this.changeStatus}>
              <option value="none">None</option>
              <option value="read">Read</option>
              <option value="reading">Reading</option>
              <option value="to-read">To Read</option>
            </select>
          </td>
        ) : (
          <td>
            <select defaultValue={status} onChange={this.changeStatus}>
              <option value="none">None</option>
              <option value="read">Read</option>
              <option value="reading">Reading</option>
              <option value="to-read">To Read</option>
            </select>
          </td>
        )}
      </tr>
    );
  }
}

export default AwardBook;
