'use strict'
const appData = {
title: "",
screens: [],
screenPrice: 0,
rollback : 9,
adaptive: true,
services: {},
allServicePrices: 0,
titleUpdate: "",
servicePercentPrice: 0,
fullPrice: 0,
asking: function() {
    do {
        appData.title = prompt("Как называется ваш проект?"); // можно только строки. цифры и пробел нельзя
    } while (!isNaN(appData.title));  
    for ( let i = 0; i<2; i++) {
        let name = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
        while (name === null) {   // при отмене будет не null, а заново вопрос
            name = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
        }
        appData.checkStroke(name);
        let count = 0;

        do {
            count = prompt("Сколько будет стоить данная работа?", 12000); // можно указать только число. пробел нельзя
        } while (!isNumber(count));

        appData.screens.push({id: i, name: name, price: count});
    }
    for (let i = 0; i<2; i++) {
        let name;
        let count = 0;
        do {
            name = prompt("Какой дополнительный тип услуги нужен?");
        } while (!isNaN(name));
        do {
            count = +prompt("Сколько это будет стоить?");
        } while (!isNumber(count));
        appData.services[name] = count;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
},
addPrices: function () {
    for (let screen of appData.screens) {
        appData.screenPrice += Number(screen.price);
    }
    for (let key in appData.services) {
        appData.allServicePrices += appData.services[key];
    }
},
checkStroke: function(str) {
    str = str.split(',');
    for (let i = 0; i < str.length; i++) { // можно указать только строку. пробел и число нельзя
        while (isNaN(str[i]) === false || isNaN(str) === null) {
            str = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
        }
    }
},
getFullPrice: function(price, otherPrice){
    appData.fullPrice = Number(price) + otherPrice;
    return appData.fullPrice;
},
getTitle: function(name) {
    appData.titleUpdate = name.split(' ').join('');
    appData.titleUpdate = appData.titleUpdate[0].toUpperCase(0) + appData.titleUpdate.substring(1).toLowerCase();
    appData.title = appData.titleUpdate;
},
getServicePercentPrices: function(roll) {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice*roll/100;
    return appData.servicePercentPrice;
},
getRollbackMessage: function(totalPrice) {
    if (totalPrice > 30000) {
        console.log("Даем скидку в 10%");
    } else if (totalPrice > 15000 && totalPrice <= 30000) {  
        console.log("Даем скидку в 5%");
    } else if (totalPrice <= 15000 && totalPrice >= 0) {
        console.log("Скидка не предусмотрена");
    } else {
        console.log("Что то пошло не так");
    }
},
logger: function() {
    console.log(appData.screens);
    console.log(appData.titleUpdate);
    console.log("Стоимость за вычетом процента: " + appData.getServicePercentPrices(appData.rollback)); 
    for (let key in appData) {
        if (typeof appData[key] !== "function") {
            console.log("Свойство " + key + " : " + appData[key]);
        }
    }
},
start: function() {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    updateCount(appData.screenPrice);
    appData.getTitle(appData.title);
    appData.getRollbackMessage(appData.fullPrice);
    appData.logger();
},
};

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
const updateCount = function(num) {  // убрать пробелы в цифрах
    appData.screenPrice = parseInt(String(num));  
};

appData.start();



