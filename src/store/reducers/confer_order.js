import { BOOKCONFERENCE } from "../../config/constants";

export default function conference_order(state=null,action){
    
    switch(action.type){
        case BOOKCONFERENCE:
            return action.payload
        default:
            return state
        }



    }


