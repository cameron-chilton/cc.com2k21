import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_MODAL
} from "../constants/actionTypes";

/**
 * Simple handler to control when the General Information Modal
 * modal should be shown.
 *
 * @param {object} modalInfo The info needed to display the modal
 */
export const openModal = (modalInfo) => {
  return (dispatch) => {
    dispatch({ type: OPEN_MODAL, modalInfo });
  };
};

// update modal with new info
export const updateModal = (modalInfo) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_MODAL, modalInfo });
  };
};

/**
 * Simple handler to control when the General Information Modal
 * modal should be no longer shown.
 */
export const closeModal = () => {
  return (dispatch) => {
    dispatch({ type: CLOSE_MODAL });
  };
};
