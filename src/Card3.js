import React from "react";
import Card from "./Card";

export default function Card3(props) {
  const { onSelect, data } = props;

  const access = Boolean(props.data.length !== 0);

  const values = [
    { image: "sublime.png", value: "Sublime Text" },
    { image: "notepad.png", value: "Notepad" },
    { image: "vscode.png", value: "VSCode" },
    { image: "brackets.png", value: "Brackets" },
    { image: "vim.png", value: "VIM" },
    { image: "bloknot.png", value: "Блокнот" },
    { image: "atom.png", value: "Atom" }
  ];

  // Шаблон карточки.
  const Item = (props) => (
    <div
      className="card-slectable d-flex flex-column justify-content-center"
      onClick={() => {
        onSelect(props.value);
      }}
    >
      <img src={props.image} alt="" />
      <div className="form-check">
        <input
          checked={data.includes(props.value)}
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label
          className="form-check-label text-center"
          htmlFor="defaultCheck1"
          style={{ display: "block" }}
        >
          {props.value}
        </label>
      </div>
    </div>
  );

  return (
    <Card
      title="Каким редактором пользуются программисты?"
      percent={props.percent}
      access={access}
      toNext={props.toNext}
      toPrev={props.toPrev}
    >
      <div className="d-flex flex-wrap justify-content-center">
        {/* Карточки. */}
        {values.map(({ value, image }) => (
          <Item key={value} value={value} image={`assets/${image}`} />
        ))}
      </div>
    </Card>
  );
}
