import * as actionTypes from './types';
import axios from 'axios';

export const auth = (credentials, isSignUp) => {
  console.log("'credentials...", credentials)

  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API-KEY]';

  if (isSignUp) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API-KEY]';
  } else {
    credentials = { ...credentials, token: 'secret1.secret2.secret3.secret4', returnSecureToken: true }
  }

  return dispatch => {
    dispatch(authStart());
    axios.post(url,
      credentials).then(response => {
        console.log("auth response", response);
      }).then(error => {
        console.log("auth error", error);
      })
  }
}

export const authStart = () => {
  return { type: actionTypes.AUTH_SAVE_START }
}

export const authSuccess = () => {
  return { type: actionTypes.AUTH_SAVE_SUCCESS }
}

export const authFailure = () => {
  return { type: actionTypes.AUTH_SAVE_FAILURE }
}