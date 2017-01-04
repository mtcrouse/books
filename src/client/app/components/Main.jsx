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
import NPR from './NPR.jsx';
import Lists from './Lists.jsx';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, books: [] };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.signOut = this.signOut.bind(this);
    this.addBook = this.addBook.bind(this);
    this.getBooks = this.getBooks.bind(this);
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

  getBooks() {
    axios.get('/books')
      .then((res) => {
        this.setState( { books: res.data } );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addBook(newBooks) {
    console.log('hey');
    this.setState( { books: newBooks } );
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
              addBook={this.addBook}
            /> } />
          <Match pattern="/lists"  render={ () =>
            <Lists
              { ...this.state }
            /> } />
          <Match pattern="/nebula" exactly render={ () =>
            <Nebula
              { ...this.state }
              getBooks={this.getBooks}
              addBook={this.addBook}
            /> } />
          <Match pattern="/npr" exactly render={ () =>
            <NPR
              { ...this.state }
            /> } />
          <Miss component={NotFound} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
