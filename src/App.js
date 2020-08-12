import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import { act } from "react-dom/test-utils";

function App() {
  const [state, setState] = useState({
    card2: null,
    card3: null,
    card4: null,
    card5: null
  });

  const [activeCard, setActiveCard] = useState(2);

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
        onSelect={(v) => setState({ ...state, card2: v })}
      />
    );
  }

  return (
    <div className="quiz d-flex justify-content-center align-items-center">
      {card}
      {/* <Card1 />
      <Card2 data={state.card2} />
      <Card3 data={state.card3} />
      <Card4 data={state.card4} />
      <Card5 data={state.card5} />
      <Card6 /> */}
    </div>
  );
}

export default App;
