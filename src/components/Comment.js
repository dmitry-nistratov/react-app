import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { commentSelectorFactory } from "../selectors";

const Comment = ({ comment }) => (
  <div>
    <h3>{comment.user}</h3>
    <section>{comment.text}</section>
  </div>
);

Comment.PropTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired
};

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();

  return (state, ownProps) => {
    return { comment: commentSelector(state, ownProps) };
  };
};

export default connect(mapStateToProps)(Comment);
