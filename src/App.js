import React, { useState, useReducer } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

import reducer from "./reducer";
import { setCard2, setCard3, setCard4, setCard5 } from "./actions";

function App() {
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

  const [activeCard, setActiveCard] = useState(1);

  const toNext = () => setActiveCard(activeCard + 1);
  const toPrev = () => setActiveCard(activeCard - 1);

  let card = null;

  if (activeCard === 1) {
    card = <Card1 toNext={toNext} />;
  } else if (activeCard === 2) {
    card = (
      <Card2
        toNext={toNext}
        toPrev={toPrev}
        data={state.card2}
        onSelect={v => dispatch(setCard2(v))}
      />
    );
  } else if (activeCard === 3) {
    card = (
      <Card3
        toNext={toNext}
        toPrev={toPrev}
        data={state.card3}
        onSelect={v => dispatch(setCard3(v))}
      />
    );
  } else if (activeCard === 4) {
    card = (
      <Card4
        toNext={toNext}
        toPrev={toPrev}
        data={state.card4}
        onSelect={v => dispatch(setCard4(v))}
      />
    );
  } else if (activeCard === 5) {
    card = (
      <Card5
        toNext={toNext}
        toPrev={toPrev}
        data={state.card5}
        onSave={v => dispatch(setCard5(v))}
      />
    );
  } else {
    card = <Card6 toPrev={toPrev} />;
  }

  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      {card}
    </div>
  );
}

export default App;
