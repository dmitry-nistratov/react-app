import React, { Component as ReactComponent } from "react";

export default Component =>
  class Accordion extends ReactComponent {
    state = {
      isOpenId: null
    };

    accordionOpen = isOpenId =>
      this.setState(prevState => ({
        isOpenId: prevState.isOpenId !== isOpenId ? isOpenId : null
      }));

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          accordionOpen={this.accordionOpen}
          isOpenId={this.state.isOpenId}
        />
      );
    }
  };
