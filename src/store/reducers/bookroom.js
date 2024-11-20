import {BOOKROOM} from "../../config/constants";

export default function bookroom(state=null,action){

switch(action.type){
    case BOOKROOM:
        return {...state, data:action.payload}
    default:
        return state
}
}