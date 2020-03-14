import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CommentList from "./CommentList";
import { deleteArticle } from "../AC";

class Article extends Component {
  static PropTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    accordionOpen: PropTypes.func,
    isOpenId: PropTypes.string
  };

  state = {
    updateIndex: 0
  };

  deleteArticle = () => {
    this.props.deleteArticle(this.props.article.id);
  };

  getBody = () => {
    const { article } = this.props;
    return (
      <div>
        <section>{article.text}</section>
        <button
          onClick={() =>
            this.setState(prevState => ({
              updateIndex: prevState.updateIndex + 1
            }))
          }
        >
          Update
        </button>
        <button onClick={this.deleteArticle}>Delete</button>
        <CommentList article={article} ref={this.setCommentsRef} />
      </div>
    );
  };

  render() {
    const { article, isOpen, accordionOpen } = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={() => accordionOpen(article.id)}>Click</button>
        {isOpen && this.getBody()}
      </div>
    );
  }
}

const mapDispatchToProps = { deleteArticle };

export default connect(
  null,
  mapDispatchToProps
)(Article);
