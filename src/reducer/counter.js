import { INCREMENT, DECREMENT } from "../constants";

export default (count = 0, action) => {
  // (state, action)
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
  }

  return count;
};
