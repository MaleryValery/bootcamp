// JavaScript – Font size changer
// The following exercise contains the following subjects:
// ● DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const createElement = (tag, parent, className, contend = "") => {
  const element = document.createElement(tag);
  element.classList = className;
  element.textContent = contend;
  parent.append(element);
  return element;
};

const wrapper = createElement("div", document.body, "wrapper");
const buttonDeg = createElement("button", wrapper, "wrapper__btn", "-");
const textSpan = createElement("span", wrapper, "", "font");
console.log("textSpan: ", textSpan);
const buttonInc = createElement("button", wrapper, "wrapper__btn", "+");

let size = 16;

const changeSize = (number) => {
  textSpan.style.fontSize = `${(size += number)}px`;
};

buttonDeg.addEventListener("click", () => {
  if (size <= 6) {
    buttonDeg.disabled = true;
    return;
  }
  buttonInc.disabled = false;
  changeSize(-1);
});

buttonInc.addEventListener("click", () => {
  if (size >= 100) {
    buttonInc.disabled = true;
    return;
  }
  buttonDeg.disabled = false;
  changeSize(1);
});
