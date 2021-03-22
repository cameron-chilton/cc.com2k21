import { combineReducers } from 'redux';
import modal from './cc2k21Reducer';
import sampleInfo from './sampleInfoReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  modal,
  sampleInfo,
});

export default rootReducer;
