import { normalizedComments as defaultComments } from "../fixtures";
import { ADD_COMMENT } from "../constants";

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

export default (comments = commentsMap, action) => {
  // (state, action)
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      return {
        ...comments,
        [randomId]: { id: randomId, ...payload.comment }
      };
  }

  return comments;
};
