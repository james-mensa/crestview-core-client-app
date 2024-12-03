import { COURSES } from "./../../config/constants";



export default function Allsubjects(state=null,action){

    switch(action.type){
        case COURSES:
            return {...state, data:action.payload}
        default:
            return state
    }



}