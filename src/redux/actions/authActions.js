// actions/authActions.js
import { LOGIN, LOGOUT } from "./authActionTypes";

export const login = (email, nickname) => {
  return {
    type: LOGIN,
    payload: {
      email,
      nickname,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
