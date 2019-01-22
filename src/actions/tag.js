import { SELECT_TAG } from "./type";

export const selectTag = tag => {
  return {
    type: SELECT_TAG,
    payload: tag
  };
};
