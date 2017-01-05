import React from 'react';
import { Match, Miss } from 'react-router';
import Profile from './Profile.jsx';
import Intro from './Intro.jsx';
import SignIn from './SignIn.jsx';
import Books from './Books.jsx';
import Search from './Search.jsx';
import NotFound from './NotFound.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import Nebula from './Nebula.jsx';
import Lists from './Lists.jsx';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      books: [],
      nebulaBooks: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.signOut = this.signOut.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getNebulaBooks = this.getNebulaBooks.bind(this);
  }

  componentDidMount() {
    axios.get('/token')
      .then(res => {
        let isLoggedIn = res.data;
        if (isLoggedIn) {
          this.setState({ isLoggedIn: true });
          this.getBooks();
          this.getNebulaBooks();
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
        console.log('getBooks from Main.jsx');
        this.setState( { books: res.data } );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getNebulaBooks() {
    axios.get('/books/awards/1')
      .then((res) => {
        this.setState( { nebulaBooks: res.data } );

        let nebulaReadCount = 0;
        let nebulaReadingCount = 0;
        let nebulaToReadCount = 0;

        for (let book of res.data) {
          if (book.shelf === 'read') {
            nebulaReadCount += 1;
          } else if (book.shelf === 'reading') {
            nebulaReadingCount += 1;
          } else if (book.shelf === 'to-read') {
            nebulaToReadCount += 1;
          }
        }

        this.setState( { nebulaReadCount, nebulaReadingCount, nebulaToReadCount });
      })
      .catch((err) => {
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
        <Header isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} />
        <main>
          <Match pattern="/" exactly render={ () =>
            <Intro
              { ...this.state }
            /> } />
          <Match pattern="/signin" exactly render={ () =>
            <SignIn
              { ...this.state }
            /> } />
          <Match pattern="/profile"  render={ () =>
            <Profile
              { ...this.state }
              signOut={this.signOut}
              getBooks={this.getBooks}
            /> } />
          <Match pattern="/books"  render={ () =>
            <Books
              { ...this.state }
              getBooks={this.getBooks}
            /> } />
          <Match pattern="/search"  render={ () =>
            <Search
              { ...this.state }
            /> } />
          <Match pattern="/lists"  render={ () =>
            <Lists
              { ...this.state }
            /> } />
          <Match pattern="/nebula" exactly render={ () =>
            <Nebula
              { ...this.state }
              getBooks={this.getBooks}
              getNebulaBooks={this.getNebulaBooks}
            /> } />
          <Miss component={NotFound} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
