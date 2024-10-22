import { CLIENT_AUTH_INIT, USER_DETAIL } from "../../type";

export const userDetail = (data) => ({
    type: USER_DETAIL,
    payload: data,
  });

  export const InitAuth=(data)=>({
    type:CLIENT_AUTH_INIT,
    payload: data,
  })