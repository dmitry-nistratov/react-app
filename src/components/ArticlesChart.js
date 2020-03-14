import React, { Component } from "react";

class ArticlesChart extends Component {
  componentDidMount() {
    //d3 works with this.ref.chart
  }

  componentWillReceiveProps() {
    //update chart for new articles
  }

  componentWillUnmount() {
    //do some cleanup
  }

  render() {
    return <div ref="chart" />;
  }
}

export default ArticlesChart;
