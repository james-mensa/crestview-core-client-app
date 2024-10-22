import {CLIENT_AUTH_INIT} from "./../../config/constants";
export default function initAuth(state=null,action){
    switch(action.type){
        case CLIENT_AUTH_INIT:
            return {...state,...action.payload};
        default:
            return state;
    }
}
