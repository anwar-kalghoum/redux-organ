import { AUTH_USER, AUTH_USER_FALSE } from "../constants/actionTypes";

const initialState = {
  login: "",
  password: "",
  isAuthe: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthe: true
      };
    case AUTH_USER_FALSE:
      return {
        ...state,
        isAuthe: false
      };
    default:
      return state;
  }
}
