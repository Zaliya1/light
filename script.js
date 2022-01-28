const title = "Название проекта";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 300;
let rollback = 99;
let fullPrice = 80000;
let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice +" гривен");

screens = screens.toLowerCase().split(" ");
console.log(screens);

console.log(fullPrice * (rollback/100));