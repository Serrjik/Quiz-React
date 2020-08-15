import React from "react";

export default function Card3(props) {
  const access = Boolean(props.data.length !== 0);
  // console.log('access:', access);

  const { onSelect, data } = props;

  // console.log(props)
  // console.log(data);

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
        <Item value="Sublime Text" image="assets/sublime.png" />
        <Item value="Notepad++" image="assets/notepad.png" />
        <Item value="VSCode" image="assets/vscode.png" />
        <Item value="Brackets" image="assets/brackets.png" />
        <Item value="VIM" image="assets/vim.png" />
        <Item value="Блокнот" image="assets/bloknot.png" />
        <Item value="Atom" image="assets/atom.png" />
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
