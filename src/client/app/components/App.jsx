import { BrowserRouter } from 'react-router';
import React from 'react';
import Main from './Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
