import { AUTH_USER, AUTH_USER_FALSE } from "../constants/actionTypes";

export const authuser = () => ({
  type: AUTH_USER
});

export const authuserfalse = () => ({
  type: AUTH_USER_FALSE
});
