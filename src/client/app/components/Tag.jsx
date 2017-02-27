import React from 'react';
import axios from 'axios';
import BookRow from './BookRow';

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taggedBooks: [] };
  }

  componentWillMount() {
    this.getTags();
  }

  componentWillReceiveProps(nextProps) {
    this.getTags();
  }

  getTags() {
    axios.get(`/tags/tag/${this.props.currentTag}`)
      .then((res) => {
        const alreadyAdded = {};
        const taggedBooks = [];

        for (const book of res.data) {
          if (alreadyAdded.hasOwnProperty(book.bookId)) {
            continue;
          } else {
            alreadyAdded[book.bookId] = true;
            taggedBooks.push(book);
          }
        }
        this.setState({ taggedBooks });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row left-align">
          <p>All books with the tag <span className="tag-span">{this.props.currentTag}</span></p>
        </div>
        <div className="row left-align">
          <div className="twelve columns" id="book-table">
            <table>
              <thead>
                <tr>
                  <th id="th-title" onClick={this.handleClick}>Title</th>
                  <th id="th-author" onClick={this.handleClick}>Author</th>
                  <th id="th-year" onClick={this.handleClick}>Year</th>
                  <th id="th-shelf">Status</th>
                </tr>
              </thead>
              <tbody id="book-table-body">
                {this.state.taggedBooks.map((book, index) => {
                  return <BookRow
                    key={index}
                    book={book}
                    getBooks={this.props.getBooks}
                    changeBookOverview={this.props.changeBookOverview}
                  />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Tag.propTypes = {
  currentTag: React.PropTypes.string,
  getBooks: React.PropTypes.func,
};

export default Tag;
