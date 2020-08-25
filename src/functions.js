export const addToArray = (array, element) => {
  const newArray = array.slice();

  if (newArray.includes(element)) {
    newArray.splice(newArray.indexOf(element), 1);
    return newArray;
  }

  newArray.push(element);
  return newArray;
};

/* 
	Функция собирает информацию о том, сколько есть ответов на вопросы 
	и соответственно вызывает функцию setProgress. 
	// Функция изменяет состояние прогрессбара.
*/

export const getProgress = (state) => {
  // Прогресс, зависит от количества отвеченных вопросов.
  let progress = 0;

  if (state.card2) {
    progress++;
  }

  if (Boolean(state.card3.length !== 0)) {
    progress++;
  }

  if (state.card4) {
    progress++;
  }

  if (state.card5.name) {
    progress++;
  }

  if (state.card5.email) {
    progress++;
  }

  if (state.card5.agree) {
    progress++;
  }

  // // Если есть ответы на все вопросы:
  // if (progress === 6) {
  // 	pElement.classList.add("bg-success")
  // }

  // // Если есть ответы НЕ на все вопросы:
  // else {
  // 	pElement.classList.remove("bg-success")
  // }

  return (progress = (progress / 6) * 100);

  // pElement.style.width = `${progress}%`
};
