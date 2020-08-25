import React, { useContext } from "react";
import Card from "./Card";

import Context from "./Context";

export default function Card1(props) {
  const { toNext } = useContext(Context);

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
          onClick={toNext}
        >
          Начать
        </button>
      </div>
    </Card>
  );
}
