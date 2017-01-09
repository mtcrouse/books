import React from 'react';
import axios from 'axios';

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getTags();
  }

  getTags() {
    axios.get(`/tags/tag/${this.props.currentTag}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row left-align">
          All books with the tag {this.props.currentTag}
        </div>
      </div>
    );
  }
}

export default Tag;
