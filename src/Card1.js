import React from "react";
import Card from "./Card";

export default function Card1(props) {
  return (
    <Card header={false} footer={false}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h4 className="card-title text-center">
          Пройди опрос о фронтенд разработке
        </h4>
        <h4 className="card-title text-center">
          и получи обучающий материал бесплатно
        </h4>
        <img src="assets/js.png" className="js_logo" alt="" />
        <button
          className="btn btn-success btn-lg"
          style={{ display: "block", margin: "0 auto" }}
          onClick={props.toNext}
        >
          Начать
        </button>
      </div>
    </Card>
  );
}
