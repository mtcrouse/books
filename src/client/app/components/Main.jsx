import React from 'react';
import { Match, Miss } from 'react-router';
import Profile from './Profile.jsx';
import Intro from './Intro.jsx';
import SignIn from './SignIn.jsx';
import NotFound from './NotFound.jsx';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    axios.get('/token')
      .then(res => {
        console.log('ok');
        // let isLoggedIn = res.data;
        // if (isLoggedIn) {
        //   this.setState({ isLoggedIn: true });
        // } else {
        //   this.setState({ isLoggedIn: false });
        // }
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  }

  render() {
    return (
      <main>
        <Match pattern="/" exactly render={
          () => <Intro
                  { ...this.state }
                /> } />
        <Match pattern="/signin" exactly render={
          () => <SignIn
                  { ...this.state }
                /> } />
        <Match pattern="/profile"  render={ () => <Profile /> } />
        <Miss component={NotFound} />
      </main>
    );
  }
}

export default Main;
