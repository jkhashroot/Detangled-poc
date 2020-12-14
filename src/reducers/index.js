import { combineReducers } from 'redux';
import chartListReducer from  './chartList.reducer';
import alert from './alert.reducer';
const rootReducer = combineReducers({
  chartListReducer,
  alert

});

export default rootReducer;
