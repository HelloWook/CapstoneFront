import { LOGIN, LOGOUT } from "../actions/authActionTypes";

const initialState = {
  email: "",
  nickname: "",
  isLoggedIn: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const { email, nickname } = action.payload;
      return {
        ...state,
        email,
        nickname,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        email: "",
        nickname: "",
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default authReducer;
