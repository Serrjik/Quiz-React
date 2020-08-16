import React from 'react';
import Card from "./Card";

export default function Card4 (props) {
	const { onSelect, data } = props

	const access = Boolean(props.data)

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
	)

	return (
		<Card
      title="Что выведет следующий код?"
      percent={75}
      access={access}
      toNext={props.toNext}
      toPrev={props.toPrev}
    >
			<img src="assets/code.jpg" style={{display: "block", margin: "0 auto"}} alt="" />

			<ul className="list-group list-group-flush">
					{/* Элементы списка. */}
				<Item value="Ничего не выведет" />
				<Item value="Будет ошибка синтаксиса" />
				<Item value="Hello, world!" />
				<Item value="HELLO, WORLD!" />
			</ul>
    </Card>
	)
}