"use strict";
// Decalting Function
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const buttonThree = document.querySelector(".button-three");
const buttonFour = document.querySelector(".button-four");
const buttonFive = document.querySelector(".button-five");
const buttonSix = document.querySelector(".button-six");
const buttonSeven = document.querySelector(".button-seven");
const buttonEight = document.querySelector(".button-eight");
const buttonEqual = document.querySelector(".button-equal");
const buttonNine = document.querySelector(".button-nine");
const buttonPlus = document.querySelector(".button-plus");
const buttondivisible = document.querySelector(".button-divd");
const buttonMult = document.querySelector(".button-mult");
const buttondivide = document.querySelector(".button-divide");
const buttonMin = document.querySelector(".button-min");
const buttonPoint = document.querySelector(".button-point");
const buttonClearAll = document.querySelector(".button-ca");
const buttonClear = document.querySelector(".button-c");
const inpMain = document.getElementById("inp-main");
// Main FUnction
const addValue = function (num) {
  console.log(`Num ${num}`);
  inpMain.value += num;
};
// Using every Button and calling Function
buttonClearAll.addEventListener("click", function () {
  inpMain.value = "";
});
buttondivisible.addEventListener("click", function () {
  addValue("%");
});
buttonMult.addEventListener("click", function () {
  addValue("*");
});
buttonPoint.addEventListener("click", function () {
  addValue(".");
});
buttonMin.addEventListener("click", function () {
  addValue("-");
});
buttondivide.addEventListener("click", function () {
  addValue("/");
});
buttonOne.addEventListener("click", function () {
  addValue(1);
});
buttonTwo.addEventListener("click", function () {
  addValue(2);
});
buttonThree.addEventListener("click", function () {
  addValue(3);
});
buttonFour.addEventListener("click", function () {
  addValue(4);
});
buttonFive.addEventListener("click", function () {
  addValue(5);
});
buttonSix.addEventListener("click", function () {
  addValue(6);
});
buttonSeven.addEventListener("click", function () {
  addValue(7);
});
buttonEight.addEventListener("click", function () {
  addValue(8);
});
buttonNine.addEventListener("click", function () {
  addValue(9);
});

buttonPlus.addEventListener("click", function () {
  addValue("+");
});
// Function equal
buttonEqual.addEventListener("click", function () {
  console.log(inpMain.value);
  let ans = eval(inpMain.value);
  console.log(ans);
  inpMain.value = ans;
});
buttonClear.addEventListener("click", function () {
  inpMain.value = inpMain.value.slice(0, -1);
});
