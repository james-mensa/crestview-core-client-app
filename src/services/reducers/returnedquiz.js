import { COMPLETEDQUIZES } from "./../../config/constants";







export default function quizesdone(state=null,action){
    switch(action.type){
        case  COMPLETEDQUIZES:
            return {...state,data:action.payload};
        
        default:
            return state;
    }
}


