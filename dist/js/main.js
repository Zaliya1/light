/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_validateForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validateForm */ \"./modules/validateForm.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 march 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_validateForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    class1: 'portfolio-item',\r\n    class2: 'portfolio-item-active',\r\n    class3: 'portfolio-content',\r\n    class4: 'portfolio-dots',\r\n    class5: 'dot',\r\n    class6: 'dot-active',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ \r\n    formId: 'form2', \r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total',\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ \r\n    formId: 'form3', \r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total',\r\n        }\r\n    ]\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculate = (price = 100) => {\r\n    const calcBlock  = document.querySelector('.calc-block');\r\n    const calcType   = document.querySelector('.calc-type');\r\n    const calcSquare  = document.querySelector('.calc-square');\r\n    const calcCount  = document.querySelector('.calc-count');\r\n    const calcDay  = document.querySelector('.calc-day');\r\n    const total  = document.querySelector('#total');\r\n    \r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n        let totalValue = price * calcTypeValue * calcSquareValue;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n        let oldResult = total.textContent;\r\n        let newResult = totalValue;\r\n\r\n        if(calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value/10;\r\n        }\r\n        if(calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if(calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        } else if(calcDay.value && calcDay.value >= 10){\r\n            calcDayValue = 1;\r\n        }\r\n        if (calcTypeValue && calcSquareValue) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n        total.textContent = totalValue;\r\n    };\r\n    calcBlock.addEventListener('change', (e)=> {\r\n        if (e.target === calcType || e.target === calcSquare || \r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc();\r\n        };\r\n        \r\n    })\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const activeMenu = document.querySelector('menu');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    activeMenu.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('.close-btn') || e.target.matches('a')) {\r\n            handleMenu();\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n    const btnClose = modal.querySelector('.popup-close');\r\n    const popupContent = modal.querySelector('.popup-content');\r\n    const width = screen.availWidth;\r\n    \r\n    if(width >= 768) {\r\n        // modal.style.transition = \"all 1s ease \";\r\n        modal.style.opacity = 0;\r\n        modal.style.width = 'auto';\r\n        modal.style.display = \"block\";\r\n        popupContent.style.display = 'none';\r\n        \r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                popupContent.style.display = 'block';\r\n                popupContent.display = 'block';\r\n                // modal.style.opacity = 1;\r\n                modal.style.width = '100%';\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 500,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modal.style.opacity = progress;\r\n                    },\r\n                });\r\n            });\r\n        });\r\n        modal.addEventListener('click', (event) => {\r\n            if (!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')) {\r\n                // modal.style.opacity = 0;\r\n                modal.style.width = 'auto';\r\n                popupContent.style.display = 'none';\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 500,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modal.style.opacity = Math.abs(progress-1);\r\n                    },\r\n                });\r\n            }\r\n        });\r\n        \r\n    } else {\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.display = \"block\";   \r\n            });\r\n        });\r\n        btnClose.addEventListener('click', () => {\r\n            modal.style.display = \"none\";\r\n        });\r\n    }\r\n   \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId);\r\n    const statusBlock = document.createElement('div');\r\n    const loadText = 'Загрузка';\r\n    const errorText = 'Ошибка';\r\n    const successText = 'Спасибо! Наш менеджер свяжется с вами';\r\n    if (formId === \"form3\") {\r\n        statusBlock.style.color = 'white';\r\n    }\r\n    const validate = (list) => {\r\n        let success = true;\r\n        return success;\r\n    };\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: \"POST\",\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n    const submitForm = () => {\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n        const formElements = form.querySelectorAll('input');\r\n\r\n        statusBlock.textContent = loadText;\r\n        form.append(statusBlock);\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id);\r\n            console.log(element);\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent;\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value;\r\n            }\r\n        });\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n            .then(data => {\r\n                statusBlock.textContent = successText;\r\n                formElements.forEach(input => {\r\n                    input.value = \"\"; \r\n                });\r\n            })\r\n            .catch(error => {\r\n                statusBlock.textContent = errorText;\r\n            });\r\n        } else {\r\n            alert('Данные не валидны');\r\n        }\r\n        \r\n    };\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место');\r\n        }\r\n        form.addEventListener(\"submit\", (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n        });\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (arr) => {\r\n    const {class1, class2, class3, class4, class5, class6} = arr;\r\n    const sliderBlock = document.querySelector(`.${class3}`);\r\n    const slides = document.querySelectorAll(`.${class1}`);\r\n    const activeSlide = document.querySelectorAll(`.${class2}`);\r\n    let dots;\r\n    let currentSlide = 0;\r\n    let interval;\r\n    const timeInterval = 2000;\r\n    const portfolioDots = document.querySelector(`.${class4}`);\r\n    if (!slides || !activeSlide || !sliderBlock || !portfolioDots) {return};\r\n    \r\n    const createDots = () => {\r\n        for (let i = 0; i<slides.length; i++) {\r\n            let dot = document.createElement('li');\r\n            dot.classList.add(class5);\r\n            if (i === 0) {\r\n                dot.classList.add(class6);  \r\n            }\r\n            portfolioDots.append(dot);\r\n        }\r\n        dots = document.querySelectorAll(`.${class5}`);\r\n        return dots;\r\n    };\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    };\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, class2);\r\n        prevSlide(dots, currentSlide, class6);\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, class2);\r\n        nextSlide(dots, currentSlide, class6);\r\n    };\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n        prevSlide(slides, currentSlide, class2);\r\n        prevSlide(dots, currentSlide, class6);\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains(class5)) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        }\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length-1;\r\n        }\r\n        nextSlide(slides, currentSlide, class2);\r\n        nextSlide(dots, currentSlide, class6);\r\n    });\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true);\r\n\r\n    createDots();\r\n    startSlide(timeInterval);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const tabContents = document.querySelectorAll('.service-tab');\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabPanel = document.querySelector('.service-header');\r\n   \r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabsBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabsBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContents[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContents[index].classList.add('d-none')\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.querySelector('#timer-minutes');\r\n    const timerSeconds = document.querySelector('#timer-seconds');\r\n    \r\n    const getTimeRemaining = () => {\r\n        let dateShop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateShop- dateNow)/1000;\r\n        let hours = Math.floor(timeRemaining/60 /60);\r\n        let minutes = Math.floor((timeRemaining/60) %60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {timeRemaining, hours, minutes, seconds};\r\n    };\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            if (String(getTime.hours).length === 1) {\r\n                timerHours.textContent = \"0\" + getTime.hours;\r\n            } else {timerHours.textContent = getTime.hours;}\r\n            if (String(getTime.minutes).length === 1) {\r\n                timerMinutes.textContent = \"0\" + getTime.minutes;\r\n            } else {timerMinutes.textContent = getTime.minutes;}\r\n            if (String(getTime.seconds).length === 1) {\r\n                timerSeconds.textContent = \"0\" + getTime.seconds;\r\n            } else {timerSeconds.textContent = getTime.seconds;}\r\n            // timerMinutes.textContent = getTime.minutes;\r\n            // timerSeconds.textContent = getTime.seconds;\r\n        }\r\n        else if (getTime.timeRemaining <= 0) {\r\n            clearInterval(idInterval);\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n        }\r\n        \r\n    };\r\n    updateClock();\r\n    let idInterval = setInterval(updateClock, 1000);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validateForm.js":
/*!*********************************!*\
  !*** ./modules/validateForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateForm = () => {\r\n    const inputs = document.querySelectorAll('input');\r\n    const formNames = document.querySelectorAll('input[placeholder=\"Ваше имя\"]');\r\n    const formEmails = document.querySelectorAll('input[type=email]');\r\n    const formPhones = document.querySelectorAll('input[type=tel]');\r\n    const form2Message = document.getElementById('form2-message');\r\n    \r\n    const inputSquare = document.querySelector('.calc-square');\r\n    const inputCount = document.querySelector('.calc-count');\r\n    const inputDay= document.querySelector('.calc-day');\r\n   \r\n    inputs.forEach(item => {\r\n        item.addEventListener('blur', (event) => {\r\n            event.target.value = event.target.value.replace(/\\s{1,}/g, ' ');\r\n            event.target.value = event.target.value.replace(/^[\\s\\-]/g, ''); // можно ли объединить со строкой 12?\r\n            event.target.value = event.target.value.replace(/[\\s\\-]$/g, '');\r\n            // event.target.value = event.target.value.replace(/^[\\s\\-]$/g, '');\r\n        });\r\n    });\r\n    formNames.forEach(item => {\r\n        item.addEventListener('input', (event) => {\r\n            event.target.value = event.target.value.replace(/[^а-яА-Я\\ ]/, '');\r\n        });\r\n        item.addEventListener('blur', (event) => {\r\n            event.target.value = event.target.value.replace(/[^а-яА-Я\\ ]/g, '');\r\n        });\r\n        item.addEventListener('blur', (event) => {\r\n            event.target.value = event.target.value.replace(/([а-яА-Я]){1}([а-яА-Я]){1,}]/g, ($1, $2)=> {\r\n                return `${$1}`.toUpperCase() + `${$2}`.toLowerCase();\r\n            });\r\n            event.target.value = event.target.value.replace(/([а-яА-Я]){1,}/g, () => {\r\n                let str = event.target.value;\r\n                let updateStr = '';\r\n                for (let i = 0; i<str.length; i++) {\r\n                    if (i === 0) {\r\n                        updateStr += str[i].toUpperCase(); \r\n                    } else {\r\n                        updateStr += str[i].toLowerCase();\r\n                    }\r\n                }\r\n                return updateStr;\r\n            });\r\n            \r\n        });\r\n\r\n    });\r\n    formEmails.forEach(item => {\r\n        item.addEventListener('input', (event) => {\r\n            event.target.value = event.target.value.replace(/[^\\w\\@\\-\\.\\!\\~\\*\\']/, '');\r\n        });\r\n        item.addEventListener('blur', (event) => {\r\n            event.target.value = event.target.value.replace(/[^\\w\\@\\-\\.\\!\\~\\*\\']/g, '');\r\n            event.target.value = event.target.value.replace(/\\s{1,}/g, ' ');\r\n        });\r\n    });\r\n    formPhones.forEach(item => {\r\n        item.addEventListener('input', (event) => {\r\n            event.target.value = event.target.value.replace(/[^\\d\\-\\(\\)\\+]/, '');\r\n        });\r\n        item.addEventListener('blur', (event) => {\r\n            event.target.value = event.target.value.replace(/[^\\d\\-\\(\\)\\+]/g, '');\r\n            event.target.value = event.target.value.replace(/\\s{1,}/g, ' ');\r\n        });\r\n    });\r\n    form2Message.addEventListener('input', (event) => {\r\n        event.target.value = event.target.value.replace(/[^а-яА-Я\\.\\ \\,\\!\\;\\:\\\"\\'\\-\\?\\(\\)\\d]/, '');\r\n    });\r\n    form2Message.addEventListener('blur', (event) => {\r\n        event.target.value = event.target.value.replace(/[^а-яА-Я\\.\\ \\,\\!\\;\\:\\\"\\'\\-\\?\\(\\)\\d]/g, '');\r\n        event.target.value = event.target.value.replace(/\\s{1,}/g, ' ');\r\n    });\r\n\r\n    inputSquare.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    });\r\n    inputCount.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    });\r\n    inputDay.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, '');\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\r\n\n\n//# sourceURL=webpack:///./modules/validateForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;