import { FILTERCARDS } from "./../../config/constants";



export default function filtercard(state=null,action){

    switch(action.type){
        case FILTERCARDS:
            return {...state, data:action.payload}
        default:
            return state
    }



}