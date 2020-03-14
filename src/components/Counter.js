import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { increment, decrement } from "../AC";

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  handleIncrement = () => {
    this.props.increment();
  };

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.count
  };
}

const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
