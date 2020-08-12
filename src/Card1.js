import React from "react";

export default function Card1(props) {
  return (
    <div className="card main-card border border-secondary">
      <div className="card-body d-flex flex-column justify-content-around">
        <div>
          <h4 className="card-title text-center">
            Пройди опрос о фронтенд разработке
          </h4>
          <h4 className="card-title text-center">
            и получи обучающий материал бесплатно
          </h4>
        </div>
        <img src="assets/js.png" className="js_logo" alt="" />
        <button
          className="btn btn-success btn-lg"
          style={{ display: "block", margin: "0 auto" }}
          onClick={props.toNext}
        >
          Начать
        </button>
      </div>
    </div>
  );
}
