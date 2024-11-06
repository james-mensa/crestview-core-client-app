

import { Api } from "../ApiClient";
import * as useNotification from "../notification";
import { InitAuth } from "./actionTypes";
export const initAuth = (email) => {
    return async (dispatch) => {
      try {
        const response=await Api.BaseApi.get(`/api/auth/init/${email}`, {  params: { email }});
        if(response){
            const _res=response.data
            const path=_res.path
            dispatch(InitAuth({email,path}));
            return _res.path
        }
      } catch (error) {
        console.log({errorMessage:error});
        dispatch(InitAuth({ email:'' }));
        return null
      }
    };
  };

  export const register = (formData) => {
    return async (dispatch) => {
      try {
        const response=await Api.BaseApi.post("/api/auth/register", formData);
        if(response){
            const _res=response.data
            dispatch(
              useNotification.notify_success({
              msg: response.data.msg,
            })
          );
            return _res
        }
      } catch (error) {
        dispatch(useNotification.notify_error({ msg: error.response.data.msg }));
        return null
      }
    };
  };


