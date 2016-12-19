import React from 'react';
import { Link, Redirect } from 'react-router';

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.createDataSet = this.createDataSet.bind(this);
  }

  createDataSet() {
    let data = [];
    let genres = [];

    for (let item of this.props.books) {
      if (genres.indexOf(item.genre) >= 0) {
        for (let dataCategory of data) {
          if (dataCategory.label === item.genre) {
            dataCategory.count += 100/this.props.books.length;
          }
        }
      } else {
        let newCount = 100/this.props.books.length;
        data.push({ label: item.genre, count: newCount });
        genres.push(item.genre);
      }
    }

    return data;
  }

  componentDidMount() {
    let dataset = this.createDataSet();

    let width = 360;
    let height = 360;
    let radius = Math.min(width, height) / 2;

    let greys = ['#dfdee8', '#babac1', '#939299', '#6e6e72', '#4b4b4f', '#313133', '#000000'];

    let color = d3.scaleOrdinal().range(greys);

    let svg = d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    let pie = d3.pie()
      .value(function(d) { return d.count; })
      .sort(null);

    let path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d) {
        return color(d.data.label);
      });
  }

  render() {
    return (
      <div>
        <div id="chart"></div>
      </div>
    );
  }
}

export default PieChart;
