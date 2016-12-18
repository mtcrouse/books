import React from 'react';
import PieChart from './PieChart.jsx';

class Analysis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        Thing-nalysis: You have {this.props.things.length} things.
        <PieChart things={this.props.things} />
      </div>
    );
  }
}

export default Analysis;
