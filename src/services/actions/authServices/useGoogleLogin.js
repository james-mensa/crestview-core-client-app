
import { userDetail } from "./models";
import * as useNotification from "../notification";
import { Api } from "../Api";


export const useGoogleLogin = (token) => {
    return async (dispatch) => {
      try {
        const response=await Api.BaseApi.post("/api/auth/google", {token},{withCredentials:true});
        dispatch(userDetail({ account: response.data, auth: true }));
        dispatch(
            useNotification.notify_success({
            msg: `${response.data.fullname} Welcome !!`,
          })
        );
        const session=await Api.BaseApi.get("/api/auth/session")
        console.log({session});
      } catch (error) {
        console.log({errorMessage:error});
        // dispatch(notify.notify_error({ msg: error.response.data.msg }));
        dispatch(userDetail({ loading: false }));
      }
    };
  };

