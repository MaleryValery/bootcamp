// The following exercise contains the following subjects:
// ● Array
// ● Objects
// Instructions
// Create a function that takes one argument, an array.
// Use this array:
// const array = ["Hello", "Good Day", "Your
// Welcome", "hotdog", "hamburgers"];
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// Extra:
// return the letter with the most occurrences as well

const countLetters = (arr = []) => {
  const letterObject = arr
    .map((word) => word.replaceAll(" ", "").toLowerCase().split(""))
    .flat()
    .reduce((acc, letter) => {
      acc[letter] = acc[letter] + 1 || 1;
      return acc;
    }, {});

  // const arrOfLettersObj = Object.entries(letterObject)

  // let max=[0, 0];
  // for (let i = 0; i < arrOfLettersObj.length; i += 1){

  //   if (max[1] < arrOfLettersObj[i][1]) {
  //     max = [...arrOfLettersObj[i]];
  //   }
  // }
  // return {[max[0]]: max[1]};
  let max = 0;
  let maxObj = {};
  for (let key in letterObject) {
    if (letterObject.hasOwnProperty(key)) {
      if (max < letterObject[key]) {
        max = letterObject[key];
        maxObj = { [key]: letterObject[key] };
      }
    }
  }
  return maxObj;
};

const a = countLetters(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]);

console.log(a);
