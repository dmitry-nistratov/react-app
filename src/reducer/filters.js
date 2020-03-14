import { PICK_DATE, PICK_SELECTION } from "../constants";

const defaultFilters = {
  date: {
    from: undefined,
    to: undefined
  },
  selections: []
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case PICK_DATE:
      return { ...filters, date: payload.date };
    case PICK_SELECTION:
      return { ...filters, selections: payload.selection };
  }
  return filters;
};
