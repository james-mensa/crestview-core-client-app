
import { useEffect} from "react";
import { useGoogleLogin } from "@react-oauth/google";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../../store/actions/auth";
import { ProviderButton } from "../../../../packages/component/Button";



export const GoogleAuth=()=>{

    const notifications = useSelector((value) => value.notification);
    const navigate = useNavigate();
    useEffect(() => {
      if (notifications && notifications.notice) {
        if (notifications.success) {
          navigate("/");
        }
      }
    },[notifications,navigate]);
  
    const dispatch = useDispatch();
    const login = useGoogleLogin({
        onSuccess: (Response) => {
            const accessToken=Response.access_token;
            if(accessToken){
                dispatch(AuthService.googleLoginApi(accessToken))
            }
        },
        onError: (error) => console.log('Login Failed:', error)
    });
    return(  <ProviderButton icon={"/assets/images/google.png"} label={"Google"} onClick={login}/>)
}