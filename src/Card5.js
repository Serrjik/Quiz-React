import React from 'react';

export default function Card5 (props) {
	return (
		<div className="card main-card border border-secondary">
			<div className="card-header">
				<h5 className="card-title">Контактные данные для предложения на основе ваших ответов.</h5>
			</div>
			<div className="card-body">
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Имя:</label>
					<input type="text" className="form-control" placeholder="Владимир" />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Адрес электронной почты:</label>
					<input type="text" className="form-control" placeholder="@mail.ru" />
				</div>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" name="exampleRadios" value="option1" />
					<label className="form-check-label">Согласен/согласна на обработку моих персональных данных.</label>
				</div>
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
					<button className="btn btn-danger float-right">Назад</button>
					<button className="btn btn-success float-right">Далее</button>
				</div>
			</div>
		</div>
	)
}