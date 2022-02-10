'use strict'
//1 задание
const title = document.getElementsByTagName('h1')[0];
console.log(title);
//2 задание
const buttons = document.getElementsByClassName('handler_btn');
const buttonStart = buttons[0];
const buttonReset = buttons[1];
console.log(buttonStart);
console.log(buttonReset);
//3 задание
const buttonScreen = document.querySelector('.screen-btn');
console.log(buttonScreen);
//4 задание
const items = document.querySelectorAll('.other-items,.percent');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
// console.log(percentItems);
// console.log(numberItems);
percentItems.forEach(function (item) {
    console.log(item);
});
numberItems.forEach(function (item) {
    console.log(item);
});
//5 и 6 задания
const inputRange = document.querySelector('.rollback > .main-controls__range > input[type="range"]');
const span = document.querySelector('.rollback > .main-controls__range > .range-value');
console.log(inputRange);
console.log(span);
//7 задание
const inputs = document.getElementsByClassName('total-input');
const screenPrice = inputs[0];
const screens = inputs[1];
const allServicePrices = inputs[2];
const rollbackMessage = inputs[3];
const servicePercentPrices = inputs[4];
console.log(screens);
//8 задание
let screens = document.querySelectorAll('.screen');
console.log(screens);