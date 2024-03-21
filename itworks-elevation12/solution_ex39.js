// JavaScript – Multiple inputs copy
// The following exercise contains the following subjects:
// ● events
// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Let's create functionality that enables the user to paste the
// verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.
// Things to think about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.
// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.
// Google “clipboardData” to find out how to get the value of
// a paste event.

const PASSWORD_LENGTH = 6;
let isSubmit = false;

const createElement = (tag, parent, className, contend = "") => {
  const element = document.createElement(tag);
  element.classList = className;
  element.textContent = contend;
  parent.append(element);
  return element;
};

const createInputs = (numInput, parent) => {
  const parantName = parent.classList[0];
  for (let i = 0; i < numInput; i += 1) {
    const inputElement = createElement("input", parent, `${parantName}__input`);
    inputElement.setAttribute("data-id", i);
    inputElement.type = "text";
    parent.append(inputElement);
  }
};

const setInputFocus = (input, inputArr, index) => {
  if (input.value.length === 1 && index + 1 < inputArr.length) {
    inputArr[index + 1].focus();
    inputArr[index + 1].select();
  } else {
    inputArr[index].blur();

    submitBtn.click();
  }
};

const pasteCode = (e, inputArr) => {
  e.preventDefault();
  const code = e.clipboardData.getData("text");
  for (let i = 0; i < inputArr.length; i += 1) {
    if (i >= inputArr.length) break;
    inputArr[i].value = code[i];
  }
  inputArr[0].blur();
  onSubmit(inputArr);
};

const insertCode = (inputArr) => {
  inputArr[0].focus();
  for (let i = 0; i < inputArr.length; i += 1) {
    inputArr[i].addEventListener("input", (e) => {
      setInputFocus(inputArr[i], inputArr, i);
    });
  }
};

const onSubmit = (inputArr, code = "123456") => {
  let userCode = "";
  inputArr.forEach((input) => (userCode += input.value));
  isSubmit = true;
  if (userCode === code) {
    message.textContent = "code is correct";
  } else {
    message.textContent = "code is NOT correct";
  }
};

const form = createElement("form", document.body, "form");
const code = createElement("p", form, "form__code", "code: 123456");
const inputWrapper = createElement("div", form, "form__input-wrapper");
createInputs(PASSWORD_LENGTH, inputWrapper);
const message = createElement("p", form, "form__message");
const submitBtn = createElement("button", form, "form__submit-btn", "submit");
const inputs = form.querySelectorAll(".form__input-wrapper__input");

insertCode(inputs);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitBtn.focus();
  onSubmit(inputs);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit borm");
});

inputs[0].addEventListener("paste", (e) => pasteCode(e, inputs));
