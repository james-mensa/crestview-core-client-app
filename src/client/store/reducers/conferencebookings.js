import {ALLORDERMEETING} from "../../../config/constants";

export default function meetingOrders(state=null,action){

switch(action.type){
    case ALLORDERMEETING:
        return {...state, data:action.payload}
    default:
        return state
}
}