const { AMDIN_DETAIL } = require("../../../config/constants");

export default function personal(state=null,action){

switch(action.type){
    case AMDIN_DETAIL:
        return {...state,person:action.payload}
    default:
        return state;
}

}