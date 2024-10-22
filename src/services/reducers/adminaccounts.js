import { ADMINACCOUNT} from "./../../config/constants"

export default function adminaccounts(state=null,action){


    switch(action.type){
        case ADMINACCOUNT:
            return {...state,data:action.payload}
        default:
            return state
    }
}