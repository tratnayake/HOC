import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

//The application state will consist of all the below.
const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
