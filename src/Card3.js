import React from 'react';
export default function Card2 (props) {
	return (
		<div className="card main-card border border-secondary">
			<div className="card-header">
				<h5 className="card-title">Каким редактором пользуются программисты?</h5>
			</div>
			<div className="card-body d-flex flex-wrap justify-content-center">
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/sublime.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>Sublime Text</label>
					</div>
				</div>
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/notepad.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>Notepad++</label>
					</div>
				</div>
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/vscode.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>VSCode</label>
					</div>
				</div>
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/brackets.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>Brackets</label>
					</div>
				</div>
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/vim.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>VIM</label>
					</div>
				</div>
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/bloknot.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>Блокнот</label>
					</div>
				</div>
				<div className="card-slectable d-flex flex-column justify-content-center">
					<img src="assets/atom.png" alt="" />
					<div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
						<label className="form-check-label text-center" htmlFor="defaultCheck1" style={{display: "block"}}>Atom</label>
					</div>
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