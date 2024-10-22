import {CONTENTS} from "./../../config/constants";



export default function newQuiz(state=null,action){
    switch(action.type){
        case CONTENTS:
            return {...state,data:action.payload};
        default:
            return state;
    }
}


