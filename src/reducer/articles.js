import { normalizedArticles as defaultArticles } from "../fixtures";
import { Map, Record } from "immutable";
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from "../constants";
import { arrToMap } from "../helpers";

const ArticleRecord = Record({
  id: undefined,
  title: undefined,
  text: undefined,
  comments: []
});

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: []
});

const defaultState = new ReducerState({});

export default (articles = defaultState, action) => {
  // (state, action)
  const { type, payload, response, randomId } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.deleteIn(["entities", payload.id]);

    case ADD_COMMENT:
      return articles.updateIn(
        ["entities", payload.articleId, "comments"],
        comments => comments.concat(randomId)
      );
    case LOAD_ALL_ARTICLES:
      return articles.set("entities", arrToMap(response, ArticleRecord));
  }

  return articles;
};
