import {
  SET_WORKL1,
  SET_WORKL2,
  SET_WORKR1,
  SET_WORKR2,
} from "../constants/actionTypes";

/**
 * Simple handler to control when the General Information Modal
 * modal should be shown.
 *
 * @param {object} workId The ID of the current loaded sample
 */

export const setWorkL1 = (workId) => {
  return (dispatch) => {
    dispatch({ type: SET_WORKL1, workId });
  };
};

export const setWorkL2 = (workId) => {
  return (dispatch) => {
    dispatch({ type: SET_WORKL2, workId });
  };
};

export const setWorkR1 = (workId) => {
  return (dispatch) => {
    dispatch({ type: SET_WORKR1, workId });
  };
};

export const setWorkR2 = (workId) => {
  return (dispatch) => {
    dispatch({ type: SET_WORKR2, workId });
  };
};
