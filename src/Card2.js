import React from "react";

export default function Card2(props) {
  const access = Boolean(props.data);

  const { onSelect, data } = props;

  const Item = (props) => (
    <li className="list-group-item" onClick={() => onSelect(props.value)}>
      <div className="form-check">
        <input
          checked={data === props.value}
          className="form-check-input"
          type="radio"
          name="quastion1"
          value="option1"
          defaultChecked
        />
        <label className="form-check-label">{props.value}</label>
      </div>
    </li>
  );

  return (
    <div className="card main-card border border-secondary">
      <div className="card-header">
        <h5 className="card-title">
          Какой язык программирования используется на FrontEnd'е?
        </h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <Item value="Russian language" />
          <Item value="HTML + CSS" />
          <Item value="JavaScript and TypeScript" />
          <Item value="Никакого. На фронтенде пользуются браузером." />
        </ul>
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
