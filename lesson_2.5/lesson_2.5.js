'use strict'

let titleProject; //Название проекта
let screenPrice; //Стоимость вёрстки
let percentage = 30; //Процент подрядчику
let allServicePrices; //Сложение всех услуг
let newTitle = '';
let screensValue;
let responsive;
let service1;
let service2;
let servicePercentPrice;
let fullPrice;


//Проверка на число:

const checkIsNumber = function(x) {
  return !isNaN(parseFloat(x)) && isFinite(x);
}

const asking = function() {
titleProject = prompt('Название проекта?', 'калькУлятОр');
screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями', 'С анимациями');

screenPrice = prompt ('Сколько это будет стоить?', 12000);

while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
    screenPrice = prompt ('Сколько это будет стоить?', 12000);
    }
    screenPrice = Number(screenPrice);

    responsive = prompt('Нужен респонсивный сайт? (да/нет)', 'Да');
}

//Стоимость дополнительных услуг:

const getAllServicePrices = function() {
  let sum = 0;
  for (let i=0; i < 2; i++){
    if (i===0){
      service1 = prompt ('Какой сервис тебе нужен?', 'Услуга 1');
    } else if (i===1){
      service2 = prompt('Какой ещё сервис тебе нужен?', 'Услуга 2');
    }

    let textFromPromt = '';

    while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null)
    {
      textFromPromt = prompt ('Сколько это будет стоить?', 5000);
    }
    sum = sum + Number(textFromPromt);
  }
  return sum
}

//Стоимость дополнительных услуг и вёрстки:

function getFullPrice() {
  return allServicePrices + screenPrice;  
}

const getTitle = function() {
  return titleProject[0].toUpperCase () + titleProject.slice(1).toLowerCase();  
}

//Итоговая стоимость за вычетом процента подрядчику:

const getServicePercentPrices = function() {
  return fullPrice - (fullPrice * (percentage / 100));
}

//Вызов функций:

const getPercentageMessage = function(price) {

  if (price > 50000) {
  return '10%';
} else if (price > 20000 && price < 50000) {
  return '5%';
} else if (price > 0 && price < 20000) {
  return 'не предусмотрена';
} else if (price < 0) { 
  return 'Что-то пошло не так';
} else if (price === 0 || price === 20000 || price === 50000) { 
  return 'Проверка на строгое равенство';
}  
}

asking(); 
newTitle = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices ();

console.log('Название проекта: ' + titleProject);
console.log('Новое название проекта: ' + newTitle);
console.log('Стоимость дополнительных услуг: ' + allServicePrices);
console.log('Стоимость дополнительных услуг и вёрстки: ' + fullPrice);
console.log('Итоговая стоимость за вычетом процента подрядчику: ' + Math.ceil(servicePercentPrice));
console.log('Скидка для клиента: ' + getPercentageMessage(fullPrice));