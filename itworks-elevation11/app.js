// map

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
  }
];

// let newDataArr = [];
// newReleases.forEach(function (data) {
//   // push
//   newDataArr.push({ id: data, title: data });
// });
// console.log("newDataArr: ", newDataArr);

// for (let i = 0; i < newReleases.length; i++) {
//   newDataArr.push({ ...newReleases[i] });
// }
// console.log(newDataArr[0] === newReleases[0]);

// let newArr = newReleases.map(function(newRelease){
//   return [{id:newRelease.id, title:newRelease.title}]
// })

// DOM - Document Object Model
//  Data/Visual Manipulations

// document
let topMainTitle = document.querySelector(".list:nth-child(2)");
let lists = document.querySelectorAll(".list");

let table = document.querySelector("table");
let output = "";

// let text = `Sergey is the best man in the world + 'and ' + ${newName}`;

for (let i = 1; i <= 10; i++) {
  output += `<tr>`;
  console.log("i element", i);
  for (let j = 1; j <= 20; j++) {
    if (i === 1 && j === 1) {
      output += `<th>Data</th>`;
      console.log("j element", j);
    } else {
      if (i === 1 || j === 1) {
        output += `<th> ${i}${j} </th>`;
      } else {
        output += `<td> ${i}${j} </td>`;
      }
    }
  }
  output += `</tr>`;
}

table.innerHTML = output;
let para = document.createElement("p");
let exampleContainer = document.querySelector(".example");

// append
// appendChild
exampleContainer.prepend(para);
para.style.cssText = "background-color:blue";
para.innerText = "I am a p";
para.classList.add("sergey-the-king");
