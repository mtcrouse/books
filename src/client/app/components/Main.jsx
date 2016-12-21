import React from 'react';
import { Match, Miss } from 'react-router';
import Profile from './Profile.jsx';
import Intro from './Intro.jsx';
import SignIn from './SignIn.jsx';
import Books from './Books.jsx';
import AddBooks from './AddBooks.jsx';
import Analysis from './Analysis.jsx';
import NotFound from './NotFound.jsx';
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
    this.setState( { books: newBooks } );
  }

  render() {
    return (
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
            /> } />
          <Match pattern="/addbooks"  render={ () =>
            <AddBooks
              { ...this.state }
              addBook={this.addBook}
            /> } />
          <Match pattern="/analysis"  render={ () =>
            <Analysis
              { ...this.state }
            /> } />
        <Miss component={NotFound} />
      </main>
    );
  }
}

export default Main;
