//Action types MUST be a constant.
import {
  CHANGE_AUTH
} from './types';


//This action will take in a True or a False.
export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
