import React from 'react';
import { Match, Miss } from 'react-router';
import Profile from './Profile.jsx';
import Intro from './Intro.jsx';
import SignIn from './SignIn.jsx';
import Books from './Books.jsx';
import BookOverview from './BookOverview.jsx';
import Search from './Search.jsx';
import NotFound from './NotFound.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import ListMenu from './ListMenu.jsx';
import Awards from './Awards.jsx';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      books: [],
      awardBooks: []
    };

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.signOut = this.signOut.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  changeBookOverview(book) {
    this.setState( { bookOverview: book } );
  }

  componentDidMount() {
    axios.get('/token')
      .then(res => {
        let isLoggedIn = res.data;
        if (isLoggedIn) {
          this.setState({ isLoggedIn: true });
          this.getBooks();
        } else {
          this.setState({ isLoggedIn: false });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getBooks() {
    axios.get('/books')
      .then((res) => {
        this.setState( { books: res.data } );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAwardBooks(awardId) {
    axios.get(`/books/awards/${awardId}`)
      .then((res) => {
        this.setState( { awardBooks: res.data } );

        let awardReadCount = 0;
        let awardReadingCount = 0;
        let awardToReadCount = 0;

        for (let book of res.data) {
          if (book.shelf === 'read') {
            awardReadCount += 1;
          } else if (book.shelf === 'reading') {
            awardReadingCount += 1;
          } else if (book.shelf === 'to-read') {
            awardToReadCount += 1;
          }
        }

        this.setState( { awardReadCount, awardReadingCount, awardToReadCount });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCurrentUser() {
    axios.get('/users/currentuser')
      .then(res => {
        this.setState( { currentUser: res.data } );
      })
      .catch(err => {
        console.log(err);
      });
  }

  signOut() {
    axios.delete('/token')
      .then(res => {
        this.setState({
          isLoggedIn: false
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div id="page-wrapper">
          <Header isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} />
          <main>
            <Match pattern="/" exactly render={ () =>
              <Intro
                { ...this.state }
              /> } />
            <Match pattern="/books" exactly render={ () =>
              <Books
                { ...this.state }
                getBooks={this.getBooks}
                getAwardBooks={this.getAwardBooks}
                changeBookOverview={this.changeBookOverview}
              /> } />
            <Match pattern="/bookoverview" exactly render={ () =>
              <BookOverview
                { ...this.state }
              /> } />
            <Match pattern="/lists" exactly render={ () =>
              <ListMenu
                { ...this.state }
              /> } />
            <Match pattern="/nebula" exactly render={ () =>
              <Awards
                { ...this.state }
                awardName="nebula"
                changeBookOverview={this.changeBookOverview}
                getBooks={this.getBooks}
                getAwardBooks={this.getAwardBooks}
              /> } />
            <Match pattern="/npr" exactly render={ () =>
              <Awards
                { ...this.state }
                awardName="npr"
                changeBookOverview={this.changeBookOverview}
                getBooks={this.getBooks}
                getAwardBooks={this.getAwardBooks}
              /> } />
            <Match pattern="/signin" exactly render={ () =>
              <SignIn
                { ...this.state }
              /> } />
            <Match pattern="/profile" exactly render={ () =>
              <Profile
                { ...this.state }
                signOut={this.signOut}
                getBooks={this.getBooks}
                changeBookOverview={this.changeBookOverview}
                getCurrentUser={this.getCurrentUser}
              /> } />
            <Match pattern="/search" exactly render={ () =>
              <Search
                { ...this.state }
              /> } />
            <Miss component={NotFound} />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
