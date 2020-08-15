import React from 'react';

export default function Card4 (props) {
	const access = Boolean(props.data)

	const { onSelect, data } = props

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
		<div className="card main-card border border-secondary">
			<div className="card-header">
				<h5 className="card-title">Что выведет следующий код?</h5>
			</div>
			<div className="card-body">
				<img src="assets/code.jpg" style={{display: "block", margin: "0 auto"}} alt="" />

				<ul className="list-group list-group-flush">

						{/* Элементы списка. */}
					<Item value="Ничего не выведет" />
					<Item value="Будет ошибка синтаксиса" />
					<Item value="Hello, world!" />
					<Item value="HELLO, WORLD!" />
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
							style={{width: "50%"}}>
						</div>
					</div>
				</div>
				<div className="btn-group">
					<button 
						className="btn btn-danger float-right"
						onClick={props.toPrev}
					>Назад</button>
					<button 
						className="btn btn-success float-right"
						onClick={props.toNext}
						disabled={!access}
					>Далее</button>
				</div>
			</div>
		</div>
	)
}