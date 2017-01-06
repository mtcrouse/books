import React from 'react';
import AwardsTable from './AwardsTable.jsx';
import axios from 'axios';
import Chart from 'chart.js'

class Awards extends React.Component {
  constructor(props) {
    super(props);

    this.changeBookOverview = this.changeBookOverview.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.blurb = this.blurb.bind(this);
    this.getAwardBooks = this.getAwardBooks.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.heading = this.heading.bind(this);

    if (this.props.awardName === 'nebula') {
      this.awardId = 1;
    } else if (this.props.awardName === 'npr') {
      this.awardId = 2;
    }
  }

  blurb() {
    if (this.props.awardName === 'nebula') {
      return <p className="left-align">
        The Nebula Awards are given each year by the Science Fiction and
        Fantasy Writers of America (SFWA) for the best science fiction or
        fantasy fiction published in the United States during the previous
        year. The award has been described as one of "the most important of
        the American science fiction awards" and "the science-fiction and
        fantasy equivalent" of the Emmy Awards.
      </p>
    } else if (this.props.awardName === 'npr') {
      return <p className="left-align">
        The NPR Top 100 Science Fiction and Fantasy Books was voted on by over
        60,000 NPR readers in 2011. A panel reviewed the submissions to make
        sure all books met the criteria: only science-fiction and fantasy novels
        written for adults were considered.
      </p>
    }
  }

  changeBookOverview(book) {
    this.props.changeBookOverview(book);
  }

  componentDidMount() {
    this.getAwardBooks(this.awardId);
  }

  getBooks() {
    this.props.getBooks();
  }

  getAwardBooks(awardId) {
    this.props.getAwardBooks(awardId);
  }

  heading() {
    if (this.props.awardName === 'nebula') {
      return <h3 className="cormorant left-align">Nebula Award for Best Novel</h3>
    } else if (this.props.awardName === 'npr') {
      return <h3 className="cormorant left-align">NPR Top 100 Science Fiction and Fantasy Books</h3>
    }
  }

  render() {
    let unreadCount = this.props.awardBooks.length - this.props.awardReadCount - this.props.awardReadingCount - this.props.awardToReadCount;
    console.log(unreadCount);
    let data = {
      labels: [
        "Read",
        "Reading",
        "To Read",
        "Uninterested"
      ],
      datasets: [
        {
          data: [this.props.awardReadCount, this.props.awardReadingCount, this.props.awardToReadCount, unreadCount],
          backgroundColor: [
            "#4fad06",
            "#e8ed61",
            "#b74503",
            "#9ca7ba"
          ]
          // hoverBackgroundColor: [
          //   "#FF6384",
          //   "#36A2EB",
          //   "#FFCE56",
          //   "#36A2EB"
          // ]
        }]
    };

    let myDoughnutChart = new Chart('myChart', {
      type: 'doughnut',
      data: data,
      animation: {
        animateScale:true
      }
    });

    return (
      <div className="container">
        <div className="row">
          <this.heading />
        </div>
        <div className="row">
          <this.blurb />
        </div>
        <div className="row">
          <div className="six columns offset-by-three">
            <canvas id="myChart" width="100" height="100"></canvas>
          </div>
        </div>
        <div className="row">
          <AwardsTable
            awardName={this.props.awardName}
            books={this.props.awardBooks}
            changeBookOverview={this.changeBookOverview}
            getBooks={this.getBooks}
            getAwardBooks={this.getAwardBooks}
          />
        </div>
      </div>
    );
  }

}

export default Awards;
