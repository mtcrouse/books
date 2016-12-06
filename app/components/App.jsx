import { BrowserRouter } from 'react-router';
import React from 'react';
import Main from './Main';

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
});

export default App;
