import { ALLCOUPONS } from "./../../config/constants";



export default function tokens(state=null,action){

    switch(action.type){
        case ALLCOUPONS:
            return {...state, coupons:action.payload}
        default:
            return state
        }



    }



