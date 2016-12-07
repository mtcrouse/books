import { BrowserRouter } from 'react-router';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          Likes : <span>{this.state.likesCount}</span>
          <div><button onClick={this.onLike}>Like Me</button></div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
