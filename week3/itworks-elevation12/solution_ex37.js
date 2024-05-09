// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
const startListItem = document.querySelector(".start-here");
const innerUnorderedList = document.querySelector(".start-here + li > ul");
const unorderedListLastEl = document.querySelector("body > ul>li:last-child");
const paragrafText = document.querySelector("body > div > p");

startListItem.innerHTML = "main title";
innerUnorderedList.insertAdjacentHTML("beforeend", "<li>sub title 4</li>");
unorderedListLastEl.remove();
document.title = "Master Of The Dom";
paragrafText.innerHTML = "some new text";
