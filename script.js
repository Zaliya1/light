'use strict'
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let rollback = 9;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", "100");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", "200");
let allServicePrices;
let titleUpdate;
let servicePercentPrice;
let fullPrice;
let arrScreens = [];

const showTypeOf = function (variable) {
    console.log(variable + " - " + typeof variable);
};
const getAllServicePrices = function(price1, price2) {
    allServicePrices = price1 + price2;
    return allServicePrices;
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

getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice(screenPrice, getAllServicePrices(servicePrice1, servicePrice2));
getTitle(title);
screens = screens.split(',');
getRollbackMessage(fullPrice);
showTypeOf(titleUpdate);  // - вызовы функции showTypeOf
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);  // - вывод строки с типами экранов для разработки screens
console.log("Стоимость за вычетом процента: " + getServicePercentPrices(rollback)); 
// - стоимость за вычетом процента отката посреднику







