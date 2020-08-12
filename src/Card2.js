import React from 'react';

export default function Card2 (props) {
	return (
		<div className="card main-card border border-secondary">
			<div className="card-header">
				<h5 className="card-title">Какой язык программирования используется на FrontEnd'е?</h5>
			</div>
			<div className="card-body">
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<div className="form-check">
							<input className="form-check-input" type="radio" name="quastion1" value="option1" defaultChecked />
							<label className="form-check-label">Russian language</label>
						</div>
					</li>
					<li className="list-group-item">
						<div className="form-check">
							<input className="form-check-input" type="radio" name="quastion1" value="option1" />
							<label className="form-check-label">HTML + CSS</label>
						</div>
					</li>
					<li className="list-group-item">
						<div className="form-check">
							<input className="form-check-input" type="radio" name="quastion1" value="option1" />
							<label className="form-check-label">JavaScript and TypeScript</label>
						</div>
					</li>
					<li className="list-group-item">
						<div className="form-check">
							<input className="form-check-input" type="radio" name="quastion1" value="option1" />
							<label className="form-check-label">Никакого. На фронтенде пользуются браузером.</label>
						</div>
					</li>
				</ul>
			</div>
			<div className="card-footer d-flex align-items-center">
				<div className="flex-grow-1">
					<div className="progress">
						<div className="progress-bar progress-bar-striped progress-bar-animated" 
							role="progressbar"
							aria-valuenow="75" 
							aria-valuemin="0" aria-valuemax="100" 
							style={{width: "50%"}}>
						</div>
					</div>
				</div>
				<div className="btn-group">
					<button className="btn btn-danger float-right" disabled>Назад</button>
					<button className="btn btn-success float-right">Далее</button>
				</div>
			</div>
		</div>
	)
}