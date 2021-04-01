import initialState from './initialState';
import {
  SET_WORKL1,
  SET_WORKL2,
  SET_WORKR1,
  SET_WORKR2,
} from '../constants/actionTypes';

  const sampleInfoReducer = (state=initialState.sampleInfo, action) => {
  switch (action.type) {

    case SET_WORKL1:
      return {
        ...state,
        work1id: action.workId,
      };
    case SET_WORKL2:
      return {
        ...state,
        work2id: action.workId,
      };
    case SET_WORKR1:
      return {
        ...state,
        work3id: action.workId,
      };
    case SET_WORKR2:
      return {
        ...state,
        work4id: action.workId,
      };
    default:
      return state;
  }
}
export default sampleInfoReducer;
