import { ALLORDERS } from "../type";

export default function orders(state = null, action) {
  switch (action.type) {
    case ALLORDERS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
