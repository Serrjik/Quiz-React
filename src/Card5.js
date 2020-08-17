import React from "react";
import Card from "./Card";

export default function Card5(props) {
  const { onSelect, inputHandler, data } = props;

  const access = Boolean(data.name) 
  && Boolean(data.email) 
  && Boolean(data.agreeToProcessingPersonalData);

  const values = [
    { type: "text", name: "name", label: "Имя:", placeholder: "Владимир" },
    { type: "email", name: "email", label: "Адрес электронной почты:", placeholder: "@mail.ru" }
  ];

  // Шаблон группы формы.
  const Item = (props) => (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">{props.label}</label>
      <input
        onChange={event => inputHandler(event)}
        type={props.type}
        className="form-control" 
        placeholder={props.placeholder}
        name={props.name}
        value={data[props.name] || ''}
      />
    </div>
  );

  return (
    <Card
      title="Контактные данные для предложения на основе ваших ответов."
      percent={100}
      access={access}
      toNext={props.toNext}
      toPrev={props.toPrev}
    >
      {/* Элементы формы (группы с текстовыми инпутами). */}
      {values.map(({ type, name, label, placeholder }) => (
        <Item key={name} name={name} type={type} label={label} placeholder={placeholder} />
      ))}

      {/* <div className="form-group">
        <label htmlFor="formGroupExampleInput">Имя:</label>
        <input
          onChange={event => inputHandler(event)}
          type="text" 
          className="form-control" 
          placeholder="Владимир" 
          name="name"
          value={data.name || ""}
        />
      </div>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">
          Адрес электронной почты:
        </label>
        <input
          onInput={event => inputHandler(event)}
          type="email"
          className="form-control" 
          placeholder="@mail.ru" 
          name="email" 
          value={data.email || ""}
        />
      </div> */}

      <div 
        className="form-check"
        onClick={() => {
          // console.log('props.data', props.data)
          onSelect();
        }}
      >
        <input
          checked={data.agreeToProcessingPersonalData}
          className="form-check-input"
          type="checkbox"
          name="exampleRadios"
          value="option1"
        />
        <label className="form-check-label">
          Согласен/согласна на обработку моих персональных данных.
        </label>
      </div>
    </Card>
  );
}
