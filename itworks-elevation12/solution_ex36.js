// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting
// Instructions
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
// Block 1

function funcA() {
  console.log(a); // undefined - var will be hoisted to the top of functional scope, but without initialisation
  console.log(foo()); // 2 - function declaration hoistes, so there is not problem to call it before defining
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName()); // "Aurelio De Rosa", getFullName will take fullName from prop object
var test = obj.prop.getFullName; // obj.prop.getFullName.bind(obj.prop);
console.log(test()); // undefined, this function will lost context because on line 29 there is referens to this, to get correct return needs to bind object or use call test.call(obj.prop)

// Block 3
// this is a tough one i didnt get it and have to search some theory about that!
// thank you for that!
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); // undefined let a variable is block scoped, there is no access to it out of the block
console.log(typeof b); // number. b was defined without let/var, so it will move to global scope

// Block 4

function funcC() {
  console.log("1");
}
funcC(); // 2 because if there are 2 functions declaration with the same name the second one will hoiste and override the first one

function funcC() {
  console.log("2");
}
funcC(); // 2

// Block 5
function funcD1() {
  d = 1;
}
funcD1(); // undefined
console.log(d); // 1 d will hoist to global scope because it defined without var/let/const

function funcD2() {
  var e = 1;
}
funcD2(); // undefined
console.log(e); // undefined var has function scope, there is no access to e in the global scope

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f); // 1 - funcE was called after it was assigned to 1
}
console.log("Value of f in global scope: ", f); // undefined - var f hoist so will not be an error, but log before assignment
var f = 1;

funcE();
