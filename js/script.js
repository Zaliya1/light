'use strict'

const title = document.getElementsByTagName('h1')[0];
const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');

const items = document.querySelectorAll('input[type="checkbox"]');
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
const selectScreen = document.querySelector('select[name="views-select"]');
const inputScreen = document.querySelector('input[placeholder="Количество экранов"]');
//items, inputRange, 

const appData = {
title: "",
screens: [],
screenPrice: 0,
rollback : 0,
adaptive: true,
servicesPercent: {},
servicesNumber: {},
servicePricesPercent: 0,
servicePricesNumber: 0,
titleUpdate: "",
servicePercentPrice: 0,
fullPrice: 0,
countScreens: 0,
check: true,
init: function() {
    this.addTitle();
    this.getRollback.bind(this)();
    buttonStart.addEventListener('click', this.start.bind(this));
    buttonPlus.addEventListener('click', this.addScreenBlock);
},
addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);
    const cloneInput = cloneScreen.querySelector('.main-controls__input > input');
    cloneInput.value= "";
    screens = document.querySelectorAll('.screen');
    screens[screens.length-1].after(cloneScreen);
},
addTitle: function() {
    document.title = title.textContent;
},
addPrices: function () {
    this.screenPrice = this.screens.reduce((sum, item) => {
        return sum += Number(item.price);
    }, 0);
    for (let key in this.servicesNumber) {
        this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
        this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100);
    }
    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - this.fullPrice*this.rollback/100;
},
checkStroke: function(str) {
    str = str.split(',');
    for (let i = 0; i < str.length; i++) { // можно указать только строку. пробел и число нельзя
        while (isNaN(str[i]) === false || isNaN(str) === null) {
            str = prompt("Какие типы экранов нужно разработать?", "Простые,Сложные,Интерактивные");
        }
    }
},
getRollback: function(){
    const startRollback = () => {
        this.rollback= inputRange.value;
        span.textContent = this.rollback + "%";
        return this.rollback;
    };
    inputRange.addEventListener('input', startRollback.bind(this)); 
    // Привязываю к appData, потому что переменная inputRange задана не в appData
},
disabledBtn: function() {
    const selectScreen = document.querySelectorAll('select[name="views-select"]');
    const inputScreen = document.querySelectorAll('input[placeholder="Количество экранов"]');
    selectScreen.forEach(item => {
        item.disabled = true;
    });
    inputScreen.forEach(item => {
        item.disabled = true;
    });
    buttonStart.disabled = true;
    // inputRange.disabled = true;
    items.forEach(item => {
        item.disabled = true;
    });
    buttonPlus.disabled = true;
    this.resetBtn();
},
reset: function() {
    buttonStart.style.display = "block";
    buttonReset.style.display = "none";
    buttonStart.disabled = false;
    const selectScreen = document.querySelectorAll('select[name="views-select"]');
    const inputScreen = document.querySelectorAll('input[placeholder="Количество экранов"]');
    selectScreen.forEach(item => {
        item.disabled = false;
    });
    inputScreen.forEach(item => {
        item.disabled = false;
    });
    // inputRange.disabled = false;
    items.forEach(item => {
        item.disabled = false;
    });
    buttonPlus.disabled = false;
    this.clearInputs();
},
clearInputs: function () {
    const checkbox = document.querySelectorAll('.main-controls__checkbox > input');
    checkbox.forEach(item => {
        item.checked = false;
    });
    const selectScreen = document.querySelectorAll('select[name="views-select"]');
    const inputScreen = document.querySelectorAll('input[placeholder="Количество экранов"]');
    selectScreen.forEach(item => {
        item.value = "";
    });
    inputScreen.forEach(item => {
        item.value = "";
    });
    this.screenPrice = 0;
    this.fullPrice = 0;
    this.rollback = 0;
    this.countScreens = 0;
    this.servicePercentPrice = 0;
    this.servicePricesNumber =0;
    this.showResult();
},
resetBtn: function() {
    buttonStart.style.display = "none";
    buttonReset.style.display = "block";
    buttonReset.addEventListener('click', this.reset.bind(this));
},
start: function() {
    this.addScreens();
    this.checkScreens();
    this.removeScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    if (this.fullPrice !== 0) {
        this.disabledBtn();
    }
},
showResult: function() {
    if (this.check === true) {
    this.addCountScreens();
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.countScreens;
    } 
    this.clearOldResult();
},
clearOldResult: function() {
    this.screens.length = 0;
    this.countScreens = 0;
    this.servicePricesNumber = 0;
    this.servicePricesPercent = 0;
},
addScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        // appData.countScreens += +input.value; Не использую этот код, т.к. он прибавляет кол-во экранов, которое без выбранного типа. Вместо этого добавляю в массив ключ quantity и пишу функцию addCountScreens, которая считает общее кол-во только после проверки массива на true
        this.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +input.value,
            quantity: +input.value,
        });
        
    });
},
checkScreens: function () {
    for (let i = 0; i<this.screens.length; i++) {
        if(this.screens[i].price === 0) {
            this.check = false;
            return;
        } else {
            this.check = true;
        }
    }
},
addCountScreens: function () {
    for (let i = 0; i<this.screens.length; i++) {
        this.countScreens += this.screens[i].quantity;
    }
},
removeScreens: function () {
    if (this.check === false) {
        this.screens.length = 0;
    }
},
addServices: function() {
    percentItems.forEach((item) => {
        const check = item.querySelector('input[type = checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type = text]');
        if(check.checked) {
            this.servicesPercent[label.textContent] = +input.value;
        }
    });
    numberItems.forEach((item) => {
        const check = item.querySelector('input[type = checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type = text]');
        if(check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
        }
    });

},
};

const isNumber = num => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

appData.init();

