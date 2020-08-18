import { SET_CARD2, SET_CARD3, SET_CARD4, SET_CARD5 } from "./Boilerplate";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_CARD2:
      return {
        ...state,
        card2: action.payload
      };

    default:
      return {
        ...state
      };
  }
}
