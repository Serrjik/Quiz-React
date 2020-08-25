import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

import { getProgress } from "./functions";

import Context, { useDatabase } from "./Context";

function App() {
  const { state, updateState } = useDatabase();

  const [activeCard, setActiveCard] = useState(1);

  const toNext = () => setActiveCard(activeCard + 1);
  const toPrev = () => setActiveCard(activeCard - 1);

  let card = null;

  if (activeCard === 1) {
    card = <Card1 />;
  } else if (activeCard === 2) {
    card = (
      <Card2
        data={state.card2}
        onSelect={updateState(2)}
        percent={getProgress(state)}
      />
    );
  } else if (activeCard === 3) {
    card = (
      <Card3
        data={state.card3}
        onSelect={updateState(3)}
        percent={getProgress(state)}
      />
    );
  } else if (activeCard === 4) {
    card = (
      <Card4
        data={state.card4}
        onSelect={updateState(4)}
        percent={getProgress(state)}
      />
    );
  } else if (activeCard === 5) {
    card = (
      <Card5
        data={state.card5}
        onSave={updateState(5)}
        percent={getProgress(state)}
      />
    );
  } else {
    card = <Card6 />;
  }

  return (
    <Context.Provider value={{ toNext, toPrev }}>
      <div className="quiz d-flex justify-content-center align-items-center">
        {card}
      </div>
    </Context.Provider>
  );
}

export default App;
