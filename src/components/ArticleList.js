import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Article from "./Article";
import { filteredArticlesSelector } from "../selectors";
import { loadAllArticles } from "../AC";
import accordion from "../decorators/accordion";

class ArticleList extends Component {
  static PropTypes = {
    filteredArticles: PropTypes.array.isRequired,
    accordionOpen: PropTypes.func.isRequired,
    isOpenId: PropTypes.string
  };

  componentDidMount() {
    this.props.loadAllArticles();
  }

  render() {
    const { filteredArticles, accordionOpen, isOpenId } = this.props;
    console.log("filteredArticles", filteredArticles);

    return (
      <div>
        <ul>
          {filteredArticles.map(item => (
            <li key={item.id}>
              <Article
                article={item}
                accordionOpen={accordionOpen}
                isOpen={item.id === isOpenId}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filteredArticles: filteredArticlesSelector(state)
});

export default connect(
  mapStateToProps,
  { loadAllArticles }
)(accordion(ArticleList));
