import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import { pickSelection } from "../../AC";
import { articlesForFiltersSelector } from "../../selectors";

import "react-select/dist/react-select.css";

class SelectArticles extends Component {
  changeSelection = selection => this.props.pickSelection(selection);

  render() {
    return (
      <div>
        <Select
          options={this.props.articlesForFilters}
          value={this.props.selections}
          onChange={this.changeSelection}
          multi
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selections: state.filters.selections,
    articlesForFilters: articlesForFiltersSelector(state)
  };
}

const mapDispatchToProps = { pickSelection };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticles);
