'use strict'
const select = document.querySelector('select');
const car = document.querySelector('.car');
const carPrice = document.querySelector('.car-price');

const optionValue = async () => {
    let index = select.value;
    let obj = await fetch('cars.json')
        .then(response => response.json())
        .catch (error => console.log(error.message))
    car.textContent = 'Тачка '+ obj[index]['brand'] + ' '+ obj[index]['model'];
    carPrice.textContent = 'Цена: '+ obj[index]['price'] + '$';
};
select.addEventListener('change', optionValue);
