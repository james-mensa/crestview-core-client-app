import {USER_DETAIL} from "../../../config/constants";
const state={
    
    auth:null,
    loading:true
}
export default function authuser(state=null,action){
    switch(action.type){
        case USER_DETAIL:
            return {...state,...action.payload};
        default:
            return state;
    }
}
