import React from 'react';
import { Match, Miss } from 'react-router';
import Profile from './Profile.jsx';
import Intro from './Intro.jsx';
import SignIn from './SignIn.jsx';
import NotFound from './NotFound.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
