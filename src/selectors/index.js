import { createSelector } from "reselect";
import moment from "moment";
import { arrToMap, mapToArr } from "../helpers";

const articlesGetter = state => state.articles.entities;
const commentsGetter = state => state.comments;
const filtersGetter = state => state.filters;

const idGetter = (state, props) => props.id;

export const modifiedArticlesSelector = createSelector(
  articlesGetter,
  articles => arrToMap(articles)
);

export const articlesForFiltersSelector = createSelector(
  modifiedArticlesSelector,
  articles => {
    return mapToArr(articles).map(article => ({
      label: article.get("title"),
      value: article.get("id")
    }));
  }
);

export const filteredArticlesSelector = createSelector(
  articlesGetter,
  filtersGetter,
  (articles, filters) => {
    const {
      selections,
      date: { to, from }
    } = filters;
    return articles.filter(article => {
      return to && from
        ? !selections.find(sel => sel.value === article.id) &&
            moment(article.date).isBetween(
              moment(from)
                .utc()
                .format(),
              moment(to)
                .utc()
                .format()
            )
        : !selections.find(sel => sel.value === article.id);
    });
  }
);

export const commentSelectorFactory = () =>
  createSelector(
    commentsGetter,
    idGetter,
    (comments, id) => comments[id]
  );
