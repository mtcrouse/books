import React from 'react';
import axios from 'axios';

class BookOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.postTag = this.postTag.bind(this);
  }

  handleChange(event) {
    const tagText = event.target.value;

    this.setState( { tagText });
  }

  postTag(event) {
    event.preventDefault();

    const data = {
      bookId: this.props.bookOverview.bookId,
      tag: this.state.tagText
    }

    axios.post('/tags', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row left-align">
          <div className="six columns">
            <h3 className="cormorant left-align">{this.props.bookOverview.title}</h3>
            <p className="left-align">by {this.props.bookOverview.author} <br />
            {this.props.bookOverview.publicationYear}</p>
          </div>
          <div className="six columns">
            { this.props.bookOverview.googleImage ? (
              <img className="book-thumbnail" src={this.props.bookOverview.googleImage} />
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="row left-align">
          <div className="twelve columns">
            { this.props.bookOverview.googleDescription ? (
              <p>Description: {this.props.bookOverview.googleDescription}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.postTag}>
            <input type="text" onChange={this.handleChange} />
            <button type="submit">Submit tag</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookOverview;
