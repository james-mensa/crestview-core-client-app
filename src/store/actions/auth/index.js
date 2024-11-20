import { initAuth, register } from "./initAuth";
import { useGoogleLogin } from "./useGoogleLogin";

export const AuthService={
googleLoginApi:useGoogleLogin,initAuth,register

}