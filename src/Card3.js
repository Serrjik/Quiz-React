import React from "react";

export default function Card3(props) {
  const access = Boolean(props.data.length !== 0);
  // console.log('access:', access);

  const { onSelect, data } = props;

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
        // console.log(props)
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
    <div className="card main-card border border-secondary">
      <div className="card-header">
        <h5 className="card-title">
          Каким редактором пользуются программисты?
        </h5>
      </div>
      <div className="card-body d-flex flex-wrap justify-content-center">
        {/* Карточки. */}
        {values.map(({ value, image }) => (
          <Item key={value} value={value} image={`assets/${image}`} />
        ))}
      </div>

      <div className="card-footer d-flex align-items-center">
        <div className="flex-grow-1">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        <div className="btn-group">
          <button className="btn btn-danger float-right" onClick={props.toPrev}>
            Назад
          </button>
          <button
            className="btn btn-success float-right"
            onClick={props.toNext}
            disabled={!access}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}
