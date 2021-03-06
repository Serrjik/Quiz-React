import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Card5(props) {
  const [name, setName] = useState(props.data.name);
  const [email, setEmail] = useState(props.data.email);
  const [agree, setAgree] = useState(props.data.agree);

  useEffect(() => {
    props.onSave({ name, email, agree });
  }, [name, email, agree]);

  const access = Boolean(agree && name && email);

  return (
    <Card
      title="Контактные данные для предложения на основе ваших ответов."
      access={access}
    >
      {/* Элементы формы (группы с текстовыми инпутами). */}
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Имя:</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Владимир"
          name="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Адрес электронной почты:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="form-control"
          placeholder="@mail.ru"
          name="email"
        />
      </div>

      <div
        className="form-check"
        onClick={() => {
          setAgree(!agree);
        }}
      >
        <input
          checked={agree}
          className="form-check-input"
          type="checkbox"
          name="exampleRadios"
          onChange={() => {}}
        />
        <label className="form-check-label">
          Согласен/согласна на обработку моих персональных данных.
        </label>
      </div>
    </Card>
  );
}
