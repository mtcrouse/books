import { BrowserRouter } from 'react-router';
import React from 'react';
import Main from './Main.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
