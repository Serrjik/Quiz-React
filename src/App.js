import React, { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

import Context, { useDatabase } from "./Context";

function App() {
  const { state, updateState } = useDatabase();

  const [activeCard, setActiveCard] = useState(1);

  const toNext = () => setActiveCard(activeCard + 1);
  const toPrev = () => setActiveCard(activeCard - 1);

  // Функция возвращает ширину полосы прогресса в процентах.
  const getProgress = () => {
    // Прогресс, зависит от количества отвеченных вопросов.
    let progress = 0;

    if (state.card2) {
      progress++;
    }

    if (state.card3.length !== 0) {
      progress++;
    }

    if (state.card4) {
      progress++;
    }

    if (state.card5.name) {
      progress++;
    }

    if (state.card5.email) {
      progress++;
    }

    if (state.card5.agree) {
      progress++;
    }

    progress = (progress / 6) * 100;

    return progress;
  };

  let card = null;

  if (activeCard === 1) {
    card = <Card1 />;
  } else if (activeCard === 2) {
    card = <Card2 data={state.card2} onSelect={updateState(2)} />;
  } else if (activeCard === 3) {
    card = <Card3 data={state.card3} onSelect={updateState(3)} />;
  } else if (activeCard === 4) {
    card = <Card4 data={state.card4} onSelect={updateState(4)} />;
  } else if (activeCard === 5) {
    card = <Card5 data={state.card5} onSave={updateState(5)} />;
  } else {
    card = <Card6 />;
  }

  return (
    <Context.Provider value={{ toNext, toPrev, getProgress }}>
      <div className="quiz d-flex justify-content-center align-items-center">
        {card}
      </div>
    </Context.Provider>
  );
}

export default App;
