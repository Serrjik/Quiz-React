// Образец кнопки, на которой обработчик клика сработает только 1 раз и удалится.

import React, { useState } from "react";

export default function Button(props) {
  const { children, onClick, ...restProps } = props;
  const [clicked, setClicked] = useState(false);

  if (!clicked) {
    restProps.onClick = (e) => {
      if (clicked) {
        return;
      }

      setClicked(true);

      if (onClick) {
        onClick(e);
      }
    };
  }

  return <button {...restProps}>{children}</button>;
}
