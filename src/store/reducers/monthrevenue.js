import {YEARMONTHSTAT} from "../../config/constants";

export default function monthlyIncome(state=null,action){

switch(action.type){
    case YEARMONTHSTAT:
        return {...state, data:action.payload}
    default:
        return state
}
}