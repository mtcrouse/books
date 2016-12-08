import React from 'react';
import { Match, Miss } from 'react-router';
import Profile from './Profile.jsx';
import Intro from './Intro.jsx';
import SignIn from './SignIn.jsx';
import Books from './Books.jsx';
import NotFound from './NotFound.jsx';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    axios.get('/token')
      .then(res => {
        let isLoggedIn = res.data;
        if (isLoggedIn) {
          this.setState({ isLoggedIn: true });
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
          /> } />
        <Match pattern="/books"  render={ () => <Books /> } />
        <Miss component={NotFound} />
      </main>
    );
  }
}

export default Main;
