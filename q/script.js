'use strict'

const title = document.getElementsByTagName('h1')[0];
const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');

const items = document.querySelectorAll('.other-items,.percent');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.main-controls__range > input[type="range"]');
const span = document.querySelector('.rollback > .main-controls__range > .range-value');

const inputs = document.getElementsByClassName('total-input');
const total = inputs[0];
const totalCount = inputs[1];
const totalCountOther = inputs[2];
const fullTotalCount = inputs[3];
const totalCountRollback = inputs[4];
let screens = document.querySelectorAll('.screen');

const appData = {
title: "",
screens: [],
screenPrice: 0,
rollback : 9,
adaptive: true,
servicesPercent: {},
servicesNumber: {},
servicePricesPercent: 0,  // доп услуги в %
servicePricesNumber: 0,
titleUpdate: "",
servicePercentPrice: 0,
fullPrice: 0,
countScreens: 0,
check: true,
init: function() {
    appData.addTitle();
    // buttonStart.disabled = true;
    appData.getRollback();
    buttonStart.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
},
addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);
    screens = document.querySelectorAll('.screen');
    screens[screens.length-1].after(cloneScreen);
},
addTitle: function() {
    document.title = title.textContent;
},
addPrices: function () {
    appData.screenPrice = appData.screens.reduce(function(sum, item) {
        return sum += Number(item.price);
    }, 0);
    for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100);
    }
    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    console.log(appData);
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice*appData.rollback/100;
},
checkStroke: function(str) {
    str = str.split(',');
    for (let i = 0; i < str.length; i++) { // можно указать только строку. пробел и число нельзя
        while (isNaN(str[i]) === false || isNaN(str) === null) {
            str = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
        }
    }
},
buttonStartActive: function() {
    buttonStart.disabled = false;
},
getRollback: function(){
    inputRange.addEventListener('input', function(){
        appData.rollback= inputRange.value;
        span.textContent = appData.rollback + "%";
        return appData.rollback;
    });
},
getServicePercentPrices: function(roll) {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice*roll/100;
    return appData.servicePercentPrice;
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
    appData.addScreens();
    appData.checkScreens();
    appData.removeScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();
},
showResult: function() {
    if (appData.check === true) {
    appData.addCountScreens();
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.countScreens;
    } 
    // else {console.log('NO');}
},
addScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach(function (screen, index){
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        // appData.countScreens += +input.value; Не использую этот код, т.к. он прибавляет кол-во экранов, которое без выбранного типа. Вместо этого добавляю в массив ключ quantity и пишу функцию addCountScreens, которая считает общее кол-во только после проверки массива на true
        appData.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +input.value,
            quantity: +input.value,
        });
        
    });
    console.log(appData.screens);  
},
checkScreens: function () {
    for (let i = 0; i<appData.screens.length; i++) {
        if(appData.screens[i].price === 0) {
            appData.check = false;
            return;
        } else {
            appData.check = true;
        }
    }
},
addCountScreens: function () {
    for (let i = 0; i<appData.screens.length; i++) {
        appData.countScreens += appData.screens[i].quantity;
    }
    console.log(appData.countScreens);
},
removeScreens: function () {
    if (appData.check === false) {
        appData.screens.length = 0;
    }
},
addServices: function() {
    percentItems.forEach(function(item){
        const check = item.querySelector('input[type = checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type = text]');
        console.log(check);
        console.log(label);
        console.log(input);
        if(check.checked) {
            appData.servicesPercent[label.textContent] = +input.value;
        }
    });
    numberItems.forEach(function(item){
        const check = item.querySelector('input[type = checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type = text]');
        console.log(check);
        console.log(label);
        console.log(input);
        if(check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
        }
    });

},
};

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};
const updateCount = function(num) {  // убрать пробелы в цифрах
    appData.screenPrice = parseInt(String(num));  
};

appData.init();

