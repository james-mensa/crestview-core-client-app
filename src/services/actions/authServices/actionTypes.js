import { USER_DETAIL,CLIENT_AUTH_INIT } from "../../../config/constants";

export const userDetail = (data) => ({
    type: USER_DETAIL,
    payload: data,
  });

  export const InitAuth=(data)=>({
    type:CLIENT_AUTH_INIT,
    payload: data,
  })