"use strict";

// -----------  exercise 1

console.log(
  "1. 5 > 2 && false = false\n",
  '2. !("knife" === "sword") = true\n',
  "3. 1 < 2 || -1 > -1 || !false = true\n",
  "4. Boolean('') = false\n",
  '5. 31 % 5 == "1" = true\n',
  "6. !!true = true\n",
  '7. "5th Avenue" != "5th Avenue" false\n',
  '8. 52 !== "52" true\n',
  "9. Boolean(undefined || null) = false\n"
);

let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = !true;
let currentYear = 2018;

if (boughtTesla && isUSCitizen) {
  let ownTeslaYears = currentYear - yearOfTeslaPurchase;

  if (ownTeslaYears >= 4) {
    console.log("would like an upgrade");
  } else console.log("is satisfied with the car");
} else if (boughtTesla && !isUSCitizen) {
  console.log("would like to move to the US");
} else {
  console.log("are interested in buying one");
}

let companies = ["Tesla", "Amazon", "Google", "Microsoft"];
let newCompanies = companies.splice(1, 2);
console.log("companies: ", companies);
console.log("newCompanies: ", newCompanies);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removedItems = numbers.splice(2, 2);
numbers[3] = 1;
const removedLastItems = numbers.splice(-4, 4);
const newArr = [0, ...numbers];
console.log("newArr: ", newArr);

const p1 = {
  name: "Jill",
  age: 34,
  city: "Rishon"
};
const p2 = {
  name: "Robert",
  age: 43,
  city: "London"
};

if (p1.age === p2.age && p1.city === p2.city) {
  console.log("Jill wanted to date Robert");
} else if (p1.city !== p2.city) {
  console.log("Jill wanted to date Robert, but couldn’t");
}

const library = {
  books: [
    { title: "Go", author: "Sam" },
    { title: "Wait", author: "Lazy" }
  ]
};
console.log(library.books);

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

// const guest = prompt("Please enter the name for your reservation");
// const guestFormated = guest[0].toUpperCase() + guest.slice(1);

// if (guestFormated in reservations) {
//   if (!reservations[guestFormated].claimed) {
//     console.log(`Welcome, ${guestFormated}`);
//   } else {
//     console.log("Hmm, someone already claimed this reservation");
//   }
// } else {
//   reservations[guestFormated] = { claimed: true };
// }

console.log("reservations: ", reservations);

const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // false, // choose one
  fridge: {
    price: 500,
    works: true, // / false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};
const expiredRaddish = date - kitchen.fridge.items.find((item) => item.name === "raddish").expiryDate;

const fixPrice = kitchen.fridge.price / 2;
const hasOven = kitchen.hasOven;
const hasFridge = kitchen.fridge;

if (hasOven && hasFridge) {
  console.log(
    `Geraldine’s raddish expired ${expiredRaddish} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`
  );
} else if (!hasOven && hasFridge) {
  console.log(
    `Geraldine’s raddish expired ${expiredRaddish} day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.`
  );
} else if (hasOven && !hasFridge) {
  console.log(
    `Geraldine’s raddish expired ${expiredRaddish} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay ${fixPrice} to fix the fridge.`
  );
} else if (!hasOven && !hasFridge) {
  console.log(
    `Geraldine’s raddish expired ${expiredRaddish} day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay ${fixPrice} to fix the fridge.`
  );
}

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i += 1) {
  people.push({ name: names[i], age: ages[i] });
}
console.log("people: ", people);

for (let person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" }
];

for (let i = 0; i < posts.length; i += 1) {
  if (posts[i].id === 2) {
    posts.splice(i, 1);
  }
}
console.log("posts: ", posts);

const posts2 = [
  {
    id: 1,
    text: "Love this product",
    comments: []
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" }
    ]
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: []
  }
];

let comments1;
for (let item of posts2) {
  if (item.id === 2) {
    comments1 = item.comments;
    for (let i = 0; i < item.comments.length; i += 1) {
      if (item.comments[i].id === 3) {
        item.comments.splice(i, 1);
      }
    }
  }
}

for (let i = 0; i < comments1.length; i += 1) {
  if (comments1[i].id === 3) {
    comments1.splice(i, 1);
  }
}

const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"]
};

const keys = Object.keys(dictionary);

for (let key of keys) {
  console.log(`Words that begin with ${key}`);
  for (let word of dictionary[key]) {
    console.log(word);
  }
}
for (let key in dictionary.A) {
  console.log(`Words that begin with ${key}`);
}

// -----------  exercise 2

const isEven = (num) => {
  return num % 2 === 0;
};

const numbersArray = [1, 3, 4, 5, 6, 7, 8, 9];

const getOddNUmbers = (arr) => {
  arr.forEach((number) => {
    if (!isEven(number)) console.log(number);
  });
};

const checkExists = (arr, number) => {
  return arr.includes(number);
};

const calculator = {
  add: function (number1, number2) {
    return number1 + number2;
  },
  subtract: function (number1, number2) {
    return number1 - number2;
  }
};

const increaseByNameLength = (money) => money + 1200;

const makeRegal = (name) => `His Royal Highness, ${name}`;

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

// ----------- exercise 3

// What will console log?
// Will there be an error?
// Why?
// Will something be undefined?
// Why?
// To what scope does each variable belong?
// Global or local? If local, to which specifically?

const run = true;

if (run) {
  let distance = 8;
  for (var i = 0; i < distance; i++) {
    console.log("running");
  }
  console.log("Finished running " + distance + " miles");
}

// console.log("Damn, you see this gal? She ran " + distance + " miles");

if (13 == "space") {
  let cowSound = "moo";
} else {
  // console.log("Cow says " + cowSound)
}

const serveOrders = function (orders) {
  for (let order of orders) {
    let specialOrder = "special " + order;
    console.log("Served a " + specialOrder);
  }

  console.log("Finished serving all the orders: " + orders);
};
const allOrders = ["fish", "lettuce plate", "curious cheese"];
serveOrders(allOrders);

const pot = "red pot with earth in it";

const getSeed = function () {
  const seed = "brown seed";
};

const plant = function () {
  getSeed();
  // console.log("Planting the " + seed + " inside a " + pot);
};

plant();
