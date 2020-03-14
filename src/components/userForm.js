import React, { Component } from "react";

class UserForm extends Component {
  state = {
    username: ""
  };

  handleUserChange = e => this.setState({ username: e.target.value });

  render() {
    return (
      <div>
        Name:{" "}
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUserChange}
        />
      </div>
    );
  }
}

export default UserForm;
