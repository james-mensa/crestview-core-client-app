
import { userDetail } from "./actionTypes";
import * as useNotification from "../notification";
import { Api } from "../ApiClient";


export const useGoogleLogin = (token) => {
    return async (dispatch) => {
      try {
        const response=(await Api.BaseApi.get(`/api/auth/google?t=${token}`,{withCredentials:true})).data;
        console.log({response})
        dispatch(userDetail({ account: response.data, auth: true }));
        dispatch(
            useNotification.notify_success({
            msg: `${response.data.fullname} Welcome !!`,
          })
        );
        // const session=await Api.BaseApi.get("/api/auth/session")
        // console.log({session});
      } catch (error) {
        console.log({errorMessage:error});
        // dispatch(notify.notify_error({ msg: error.response.data.msg }));
        dispatch(userDetail({ loading: false }));
      }
    };
  };

