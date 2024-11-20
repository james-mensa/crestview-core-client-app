import {ADMIN_DETAIL} from "../../config/constants";
const state={
    
    auth:null,
    loading:true
}
export default function admin(state=null,action){
    switch(action.type){
        case ADMIN_DETAIL:
            return {...state,...action.payload};
        default:
            return state;
    }
}
