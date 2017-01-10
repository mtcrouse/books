import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import toastr from 'toastr';

class BookOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tags: [] };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postTag = this.postTag.bind(this);
    this.setTag = this.setTag.bind(this);
  }

  componentWillMount() {
    this.getTags();
  }

  getTags() {
    axios.get(`/tags/book/${this.props.bookOverview.bookId}`)
      .then(res => {
        const tagObj = {};

        for (let tag of res.data) {
          let tagName = tag.tag;
          if (tagObj.hasOwnProperty(tagName) === false) {
            tagObj[tagName] = 1;
          } else {
            tagObj[tagName] += 1;
          }
        }

        this.setState( { tags: tagObj });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    const tagText = event.target.value;

    this.setState( { tagText });
  }

  postTag(event) {
    event.preventDefault();

    const data = {
      bookId: this.props.bookOverview.bookId,
      tag: this.state.tagText.toLowerCase()
    }

    axios.post('/tags', data)
      .then((res) => {
        this.getTags();
        toastr.success(`You posted the tag ${this.state.tagText.toLowerCase()}`);
      })
      .catch((err) => {
        toastr.error(`Uh oh -- have you already added this tag?`);
        console.log(err);
      });
  }

  setTag(event) {
    const tag = event.target.id;

    this.props.setTag(tag);
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
          <div className="four columns">
            <form onSubmit={this.postTag}>
              <input type="text" onChange={this.handleChange} />
              <button type="submit">Submit tag</button>
            </form>
          </div>
          <div className="eight columns">
            <div className="row">
              <p>Click on any tag to see more books with that tag!</p>
            </div>
            <div className="row">
              { Object.keys(this.state.tags).length > 0 ? (
                Object.keys(this.state.tags).map((tag, index) => {
                  return <Link to="/tag" key={index} className="tag-link"><span className="tag-span" onClick={this.setTag} id={tag}>{tag} ({this.state.tags[tag]})</span></Link>;
                })
              ) : (
                <div className="empty-div"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookOverview;
