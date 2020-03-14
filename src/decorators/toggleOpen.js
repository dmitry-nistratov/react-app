import React, { Component as ReactComponent } from "react";
import { timingSafeEqual } from "crypto";

export default OriginalComponent =>
  class WrappedComponent extends ReactComponent {
    state = {
      isOpen: false
    };

    toggleOpen = () =>
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
