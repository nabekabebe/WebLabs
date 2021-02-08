/*
Here is the exercise on working on the remaining bom method

Location , Navigator , screen , Window

Follow the Instruction on the comments

1. Declare the UI Variables for selecting on the elements
2. Use the innerHTML property to display the result on each element
3. The Text  of the elements will lead you what bom information is required

Adding Extra is Possible if you want to explore more ...

Good Luck !!!
*/

// Define UI Variables  here

// Display the BOM Information on the innerHTML of the elements

const allList = document.querySelectorAll('.collection a span');
var values = [
  window.location.href,
  window.location.host,
  window.location.protocol,
  window.location.port,
  window.location.hostname,
  window.navigator.appCodeName,
  window.navigator.appVersion,
  window.navigator.platform,
  window.navigator.language,
  window.navigator.cookieEnabled,
  window.screen.height,
  window.screen.width,
  window.screen.pixelDepth,
  window.history.length,
  window.history.state,
];
// for (let index = 0; index < 15; index++) {
//     values[index] =
// }
allList.forEach((el, index) => {
  el.innerHTML = values[index];
});
