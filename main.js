'use scrtict'
const books = document.querySelectorAll('.book');
books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);
console.log(books);

const body = document.querySelector('body');
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

const titleBook3 = books[4].querySelector('h2');
titleBook3.textContent = "Книга 3. this и Прототипы Объектов";
titleBook3.style.color = "darkkhaki";

const adv = document.querySelector('.adv');
adv.style.display = "none";

const chaptersBook2 = books[0].querySelectorAll('li');
chaptersBook2[1].after(chaptersBook2[3], chaptersBook2[6], chaptersBook2[8], chaptersBook2[4]);
chaptersBook2[10].before(chaptersBook2[2]);

const chaptersBook5 = books[5].querySelectorAll('li');
chaptersBook5[1].after(chaptersBook5[9], chaptersBook5[3], chaptersBook5[4], chaptersBook5[2]);
chaptersBook5[7].after(chaptersBook5[5]);

const chaptersBook6 = books[2].querySelectorAll('li');
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

console.log(newChapter);
console.log(chaptersBook6);
chaptersBook6[8].append(newChapter);
