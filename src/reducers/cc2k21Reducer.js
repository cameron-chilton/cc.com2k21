import initialState from './initialState';
import {OPEN_MODAL, CLOSE_MODAL, UPDATE_MODAL} from '../constants/actionTypes';

  const cc2k21Reducer = (state=initialState.modal, action) => {
    switch (action.type) {
      case OPEN_MODAL:
        return {
          ...initialState.modal,
          ...action.modalInfo,
          isModalOpen: true,
        };
      case UPDATE_MODAL: {
          const { ...rest } = action.modalInfo;
          return {
            ...state,
            ...rest,
          };
        }
      case CLOSE_MODAL:
        return {
          ...initialState.modal,
          isModalOpen: false,
        };
      default:
        return state;
    }
}
export default cc2k21Reducer;
