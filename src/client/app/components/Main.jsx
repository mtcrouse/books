import React from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import Intro from './Intro';
import SignIn from './SignIn';
import Books from './Books';
import BookOverview from './BookOverview';
import Search from './Search';
import NotFound from './NotFound';
import Header from './layout/Header';
import ListMenu from './ListMenu';
import Awards from './Awards';
import Tag from './Tag';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      books: [],
      awardBooks: [],
      currentTag: '',
      bookOverview: {},
    };

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.signOut = this.signOut.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.setTag = this.setTag.bind(this);
    this.logInUser = this.logInUser.bind(this);
  }

  changeBookOverview(book) {
    this.setState({ bookOverview: book });
  }

  componentDidMount() {
    axios.get('/token')
      .then((res) => {
        const isLoggedIn = res.data;
        if (isLoggedIn) {
          this.setState({ isLoggedIn: true });
          this.getBooks();
        } else {
          this.setState({ isLoggedIn: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logInUser() {
    axios.get('/token')
      .then((res) => {
        const isLoggedIn = res.data;
        if (isLoggedIn) {
          this.setState({ isLoggedIn: true });
          this.getBooks();
        } else {
          this.setState({ isLoggedIn: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getBooks() {
    axios.get('/books')
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAwardBooks(awardId) {
    axios.get(`/books/awards/${awardId}`)
      .then((res) => {
        this.setState({ awardBooks: res.data });

        let awardReadCount = 0;
        let awardReadingCount = 0;
        let awardToReadCount = 0;

        for (const book of res.data) {
          if (book.shelf === 'read') {
            awardReadCount += 1;
          } else if (book.shelf === 'reading') {
            awardReadingCount += 1;
          } else if (book.shelf === 'to-read') {
            awardToReadCount += 1;
          }
        }

        this.setState({ awardReadCount, awardReadingCount, awardToReadCount });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCurrentUser() {
    axios.get('/users/currentuser')
      .then((res) => {
        this.setState({ currentUser: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setTag(tag) {
    this.setState({ currentTag: tag });
  }

  signOut() {
    axios.delete('/token')
      .then((_res) => {
        this.setState({
          isLoggedIn: false,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div id="page-wrapper">
          <Header isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} />
          <main>
            <Switch>
              <Route
                path="/"
                exact render={() =>
                  <Intro
                    {...this.state}
                  />
                }
              />
              <Route
                path="/books"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <Books
                      {...this.state}
                      getBooks={this.getBooks}
                      getAwardBooks={this.getAwardBooks}
                      changeBookOverview={this.changeBookOverview}
                    />
                  )
                }
              />
              <Route
                path="/bookoverview"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <BookOverview
                      {...this.state}
                      setTag={this.setTag}
                    />
                  )
                }
              />
              <Route
                path="/lists"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <ListMenu
                      {...this.state}
                    />
                  )
                }
              />
              <Route
                path="/nebula"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <Awards
                      {...this.state}
                      awardName="nebula"
                      changeBookOverview={this.changeBookOverview}
                      getBooks={this.getBooks}
                      getAwardBooks={this.getAwardBooks}
                    />
                  )
                }
              />
              <Route
                path="/npr"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <Awards
                      {...this.state}
                      awardName="npr"
                      changeBookOverview={this.changeBookOverview}
                      getBooks={this.getBooks}
                      getAwardBooks={this.getAwardBooks}
                    />
                  )
                }
              />
              <Route
                path="/signin"
                exact render={() =>
                  this.state.isLoggedIn === true ? (
                    <Redirect to="/search" />
                  ) : (
                    <SignIn
                      {...this.state}
                      logInUser={this.logInUser}
                    />
                  )
                }
              />
              <Route
                path="/search"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <Search
                      {...this.state}
                      getBooks={this.getBooks}
                    />
                  )
                }
              />
              <Route
                path="/tag"
                exact render={() =>
                  this.state.isLoggedIn === false ? (
                    <Redirect to="/" />
                  ) : (
                    <Tag
                      {...this.state}
                      setTag={this.setTag}
                      changeBookOverview={this.changeBookOverview}
                      getBooks={this.getBooks}
                    />
                  )
                }
              />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
