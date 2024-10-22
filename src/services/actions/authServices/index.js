import { initAuth, register } from "./auth";
import { useGoogleLogin } from "./useGoogleLogin";

export const AuthService={
googleLoginApi:useGoogleLogin,initAuth,register

}