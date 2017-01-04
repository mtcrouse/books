import React from 'react';
import BookTable from './BookTable.jsx';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, selectedShelf: 'read' };

    this.postBook = this.postBook.bind(this);
    this.createModal = this.createModal.bind(this);
    this.destroyModal = this.destroyModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedShelf: event.target.value });
  }

  postBook() {
    let title = this.props.book.volumeInfo.title;
    let author = this.props.book.volumeInfo.authors.join(', ');
    let subtitle = this.props.book.volumeInfo.subtitle;
    let genre = this.props.book.volumeInfo.categories.join(', ');
    let language = this.props.book.volumeInfo.language;
    let originalLanguage = null;
    let publicationYear = 1000;
    let shelf = this.state.selectedShelf;

    let data = {
      title,
      subtitle,
      author,
      genre,
      language,
      originalLanguage,
      publicationYear,
      shelf
    }

    this.props.postBook(data);
  }

  createModal() {
    this.setState( { modal: true, modalContent: this.props.book.volumeInfo });
  }

  destroyModal() {
    this.setState( { modal: false });
  }

  render() {
    const title = this.props.book.volumeInfo.title;
    const authors = this.props.book.volumeInfo.authors;
    const genres = this.props.book.volumeInfo.categories;

    return (
      <div className="search-result">
        <div className="row">
          <div className="four columns">
            <p>{title ? title : 'NOT AVAILABLE'}</p>
          </div>
          <div className="four columns">
            {authors ? authors.map((author,index) => {return <p key={index}>{author}</p>;}) : 'NOT AVAILABLE'}
          </div>
          <div className="four columns">
            {genres ? genres.map((genre, index) => { return <p key={index}>{genre}</p>; }) : 'NOT AVAILABLE'}
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <button onClick={this.createModal}>More Information</button>
          </div>
          <div className="six columns">
            <select name="shelf-selector" defaultValue="read" onChange={this.handleChange}>
              <option value="read">Read</option>
              <option value="reading">Reading</option>
              <option value="to-read">To Read</option>
            </select>
            <button onClick={this.postBook}>Add Book to Shelf</button>
          </div>
        </div>
        <div id="modal-x-holder"></div>
        {this.state.modal ? (
          <div id="modal">
            <BookTable content={this.state.modalContent} />
            <div id="modal-x" onClick={this.destroyModal}>X</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default SearchResult;
