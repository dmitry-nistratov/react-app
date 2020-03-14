import {
  INCREMENT,
  DECREMENT,
  DELETE_ARTICLE,
  PICK_SELECTION,
  PICK_DATE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES
} from "../constants";

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };
}

export const addComment = (comment, articleId) => ({
  type: ADD_COMMENT,
  payload: { comment, articleId },
  generateId: true
});

export const pickSelection = selection => ({
  type: PICK_SELECTION,
  payload: {
    selection
  }
});

export const pickDate = ({ from, to }) => ({
  type: PICK_DATE,
  payload: {
    date: {
      from,
      to
    }
  }
});

export const loadAllArticles = () => ({
  type: LOAD_ALL_ARTICLES,
  callApi: "/api/article"
});
