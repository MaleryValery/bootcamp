const submitBtn = document.querySelector(".form__btn");
const formInput = document.querySelector(".form__input");
const form = document.querySelector(".form__wrapper");
const colorPicker = document.querySelector(".form__color-picker");
const body = document.querySelector("body");

function isValidHexColor(color) {
  const regex = /^#([0-9A-F]{3}){1,2}$/i;
  return regex.test(color);
}

const handlerSubmit = (event) => {
  event.preventDefault();
  const isColor = isValidHexColor(formInput.value);
  if (!isColor) return alert("color is not correct");
  body.style.background = formInput.value;
};

const handleChangeColor = (event) => {
  body.style.background = event.target.value;
};

form.addEventListener("submit", handlerSubmit);
colorPicker.addEventListener("input", handleChangeColor);
