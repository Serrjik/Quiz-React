import { createContext, useReducer } from "react";
import { setCard2, setCard3, setCard4, setCard5 } from "./actions";
import reducer from "./reducer";

const Context = createContext();

export default Context;

export function useDatabase() {
  const [state, dispatch] = useReducer(reducer, {
    card2: null,
    card3: [],
    card4: null,
    card5: {
      name: "",
      email: "",
      agree: false
    }
  });

  const updateState = (n) => (v) => {
    let setCard = null;

    if (n === 2) {
      setCard = setCard2;
    } else if (n === 3) {
      setCard = setCard3;
    } else if (n === 4) {
      setCard = setCard4;
    } else if (n === 5) {
      setCard = setCard5;
    }

    if (setCard) {
      dispatch(setCard(v));
    }
  };

  return {
    state,
    updateState,
    dispatch
  };
}
