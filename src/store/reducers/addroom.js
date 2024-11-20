import { ADDROOM } from "../../config/constants";

export default function newroom(state = null, action) {
  switch (action.type) {
    case ADDROOM:
      return action.payload;
    default:
      return state;
  }
}
