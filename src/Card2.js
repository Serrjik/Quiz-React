import React from "react";
import Card from "./Card";

export default function Card2(props) {
  const { onSelect, data } = props;
  const access = Boolean(props.data);
  const values = [
    "Russian language",
    "HTML + CSS",
    "JavaScript and TypeScript",
    "Никакого. На фронтенде пользуются браузером."
  ];

  // Шаблон элемента списка.
  const Item = (props) => (
    <li className="list-group-item" onClick={() => onSelect(props.value)}>
      <div className="form-check">
        <input
          checked={data === props.value}
          className="form-check-input"
          type="radio"
          name="question1"
          value="option1"
        />
        <label className="form-check-label">{props.value}</label>
      </div>
    </li>
  );

  return (
    <Card
      title="Какой язык программирования используется на FrontEnd'е?"
      percent={25}
      access={access}
      toNext={props.toNext}
      toPrev={props.toPrev}
    >
      <ul className="list-group list-group-flush">
        {values.map((value) => (
          <Item key={value} value={value} />
        ))}
      </ul>
    </Card>
  );
}
