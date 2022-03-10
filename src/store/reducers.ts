import { combineReducers } from 'redux';
import trades from './trades/reducer';

const reducers = combineReducers({
  trades,
});

export default reducers;
