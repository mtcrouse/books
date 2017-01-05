import React from 'react';
import { Link, Redirect } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.checkIfSignedOut = this.checkIfSignedOut.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  checkIfSignedOut() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />
    } else {
      return <div></div>
    }
  }

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    let booksRead = this.props.books.filter((book) => {
      return book.shelf === 'read';
    });

    let currentlyReading = this.props.books.filter((book) => {
      return book.shelf === 'reading';
    });

    return (
      <div className="container">
        <div className="row">
          <h3 className="u-pull-left cormorant">Metta's Profile</h3>
        </div>
        <div className="row left-align">
            Books read: {booksRead.length}
        </div>
        <div className="row left-align">
          <div className="three columns left-align">
            Currently reading:
          </div>
          <div className="nine columns">
            {currentlyReading.map((book,index) => {
              return <div key={index} className="row left-align">
                {book.title} by {book.author} ({book.publicationYear})
              </div>;
            })}
          </div>
        </div>
        <this.checkIfSignedOut />
      </div>
    );
  }
}

export default Profile;
