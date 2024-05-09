// create elem
// let img = document.createElement('img');
// img.setAttribute('src', '../assets/bulb-off.jpg');
// document.body.appendChild(img);
// let bulbStatus = 'off';
// img.style.cursor = 'pointer';

// img.addEventListener('click', function(event){
//     if(bulbStatus == 'off'){
//         this.src = '../assets/bulb-on.jpg'
//         bulbStatus = 'on';
//     }else if(bulbStatus == 'on'){
//         this.src = '../assets/bulb-off.jpg'
//         bulbStatus = 'off';
//     }
// })

// // createHTML
// function createHTML(tag, text) {
//   let el = document.createElement(tag);
//   el.innerText = text;
//   form.appendChild(el);
//   return el;
// }

// // form
// let form = document.createElement("form");
// form.innerText = "Insert the number of the images you want";
// document.body.appendChild(form);
// let app = createHTML("input", "");
// app.setAttribute("type", "number");

// // button
// let btn = createHTML("button", "submit");

// function oneImg() {
//   let imgTag = document.createElement("img");
//   imgTag.setAttribute("src", "../assets/bulb-off.jpg");
//   imgTag.style.width = "40px";
//   document.body.appendChild(imgTag);
// }

// btn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let lastImg = document.getElementsByTagName("img"); //array
//   Array.from(lastImg).forEach((elem) => {
//     elem.remove();
//   });

//   if (typeof parseInt(app.value) == "number") {
//     let numberOfImgs = parseInt(app.value);
//     for (let i = 0; i <= numberOfImgs; i++) {
//       oneImg();
//     }
//   }
// });

// Closures
// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }

// var firstResult = someFunction(9);
// var result = firstResult(2);

// var a = 1;
// function b2() {
//   a = 10;
//   function a() {}
// }
// b2();

// console.log(a); // 1
// b2();
