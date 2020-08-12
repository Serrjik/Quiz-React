import React from 'react';

export default function Card6 (props) {
	return (
		<div className="card main-card border border-secondary">
			<div className="card-body d-flex flex-column justify-content-around">
				<div>
					<h4 className="card-title text-center">Наши поздравления!</h4>
					<h4 className="card-title text-center">Вам на почту отправлены доп-материалы</h4>
				</div>
				<div className="d-flex justify-content-around">
					<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
						<img src="assets/text.svg" style={{width: "100px"}} alt="" />
						<p>Учебный материал</p>
					</div>
					<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
						<img src="assets/youtube.png" style={{width: "100px"}} alt="" />
						<p>1-й видео урок</p>
					</div>
					<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
						<img src="assets/exel.png" style={{width: "100px"}} alt="" />
						<p>План обучения</p>
					</div>
				</div>
			</div>
		</div>
	)
}