'use strict'
let title;
let screens;
let screenPrice;
let rollback = 9;
let adaptive;
let service1;
let service2;
let allServicePrices;
let titleUpdate;
let servicePercentPrice;
let fullPrice;
let arrScreens = [];

const showTypeOf = function (variable) {
    console.log(variable + " - " + typeof variable);
};
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
const checkStroke = function(str) {
    str = str.split(',');
    for (let i = 0; i < str.length; i++) { // можно указать только строку. пробел и число нельзя
        while (isNaN(str[i]) === false || isNaN(str) === null) {
            str = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
        }
    }
};
const updateCount = function(num) {  // убрать пробелы в цифрах
    return parseInt(String(num));  
};
const asking = function() {
    do {
        title = prompt("Как называется ваш проект?"); // можно только строки. цифры и пробел нельзя
    } while (!isNaN(title));
    screens = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
    while (screens === null) {   // при отмене будет не null, а заново вопрос
        screens = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
    }
    checkStroke(screens);
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", 12000); // можно указать только число. пробел нельзя
    } while (!isNumber(screenPrice));
    adaptive = confirm("Нужен ли адаптив на сайте?");
};
const getAllServicePrices = function() {
    let sum = 0;
        for (let i = 0; i<2; i++) {
            let count = 0;
            if (i === 0) {
                service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            count = +prompt("Сколько это будет стоить?");
            if (isNumber(count)) {
                sum += updateCount(count);
            } else {
                count = +prompt("Сколько это будет стоить?");
            }
        }
    return sum;
};
function getFullPrice(price, otherPrice){
    fullPrice = price + otherPrice;
    return fullPrice;
}
const getTitle = function(name) {
    titleUpdate = name.split(' ').join('');
    titleUpdate = titleUpdate[0].toUpperCase(0) + titleUpdate.substring(1).toLowerCase();
    return titleUpdate;
};
const getServicePercentPrices = function(roll) {
    servicePercentPrice = fullPrice - fullPrice*roll/100;
    return servicePercentPrice;
};
const getRollbackMessage = function(totalPrice) {
    if (totalPrice > 30000) {
        console.log("Даем скидку в 10%");
    } else if (totalPrice > 15000 && totalPrice <= 30000) {  
        console.log("Даем скидку в 5%");
    } else if (totalPrice <= 15000 && totalPrice >= 0) {
        console.log("Скидка не предусмотрена");
    } else {
        console.log("Что то пошло не так");
    }
}; // - сообщение о скидке пользователю (вызовы функции getRollbackMessage)

asking();
allServicePrices = getAllServicePrices();
getFullPrice(screenPrice, allServicePrices);
screenPrice = updateCount(screenPrice);
title = getTitle(title);

getRollbackMessage(fullPrice);
showTypeOf(title);  // - вызовы функции showTypeOf
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);  // - вывод строки с типами экранов для разработки screens
console.log("Стоимость за вычетом процента: " + getServicePercentPrices(rollback)); 
// - стоимость за вычетом процента отката посреднику
console.log(allServicePrices);






