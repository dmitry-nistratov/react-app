import React, { Component } from "react";
import { connect } from "react-redux";
import toggleOpen from "../decorators/toggleOpen";
import { addComment } from "../AC";
import Comment from "./Comment";

const limits = {
  user: { min: 5, max: 15 },
  text: { min: 20, max: 50 }
};

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  state = {
    isOpen: false,
    user: "",
    text: "",
    invalidLogin: false,
    invalidComment: false
  };

  checkLogin = e => {
    const user = e.target.value;
    if (user.length < 5 || user.length > 15)
      this.setState({ invalidLogin: true });
    else if (this.state.invalidLogin) this.setState({ invalidLogin: false });
  };

  checkComment = e => {
    const text = e.target.value;
    if (text.length < 20 || text.length > 50)
      this.setState({ invalidComment: true });
    else if (this.state.invalidComment)
      this.setState({
        invalidComment: false
      });
  };

  handleChange = type => ev => {
    const value = ev.target.value;
    if (value.length > limits[type].max) return;
    this.setState({ [type]: value });
  };

  getStyle = type =>
    this.state[type].length && this.state[type].length < limits[type].min
      ? { border: "1px solid red" }
      : null;

  addComment = e => {
    const { user, text } = this.state;
    e.preventDefault();
    this.props.addComment({ user, text }, this.props.article.id);
    this.setState({ user: "", text: "" });
  };

  render() {
    const { isOpen, toggleOpen } = this.props;
    const { invalidLogin, invalidComment } = this.state;
    const { comments } = this.props.article;

    return (
      <div>
        <button onClick={toggleOpen}>
          {!isOpen ? "Show comments" : "Hide comments"}
        </button>
        {isOpen && (
          <div>
            <ul>
              {comments.map(id => (
                <li key={id}>
                  <Comment id={id} />
                </li>
              ))}
            </ul>
            <form onSubmit={this.addComment}>
              <input
                name="user"
                type="text"
                value={this.state.user}
                placeholder="Login"
                onChange={this.handleChange("user")}
                style={this.getStyle("user")}
              ></input>
              <br />
              <textarea
                name="text"
                placeholder="Write a text"
                value={this.state.text}
                onChange={this.handleChange("text")}
                style={this.getStyle("text")}
              />
              <button type="submit" disabled={invalidLogin || invalidComment}>
                Submit
              </button>
              <button type="reset">Cancel</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { addComment };

export default connect(
  null,
  mapDispatchToProps
)(toggleOpen(CommentList));
