import { CHANGE_AUTH } from '../actions/types';

//REDUCERS define what to do on the STATE when an action is received.
// In this case, this ties into the state.authenticated as shown in
// ./reducers/index.js
export default function(state = false, action){
  switch (action.type){
    case CHANGE_AUTH:
      return action.payload;
  }
  return state;
}
