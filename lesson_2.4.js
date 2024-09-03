'use strict'

let titleProject = prompt('Название проекта?'); //Название проекта
let screenPrice = 300; //Стоимость вёрстки
let percentage = 30; //Процент подрядчику

let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
console.log('Типы экранов: ' + screensValue);

let responsive = prompt('Нужен респонсивный сайт? (да/нет)');
console.log('Нужен ли респонсивный сайт: ' + responsive);

//Дополнительные сервисы:

let service1 = prompt('Какой сервис нужен?');
console.log('Какой сервис нужен?: ' + service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log('Сколько это будет стоить?: ' + servicePrice1);

let service2 = prompt('Какой ещё сервис тебе нужен?');
console.log('Какой ещё сервис тебе нужен?: '+ service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log('Сколько будет стоить этот второй сервис?: ' + servicePrice2);

//Итоговая стоимость:

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log('Общая стоимость проекта: ' + fullPrice);

let percentageResult = +(fullPrice * (percentage / 100));
console.log('Процент подрядчику/партнеру: ' + percentageResult);

let servicePercentPrice = Math.round (fullPrice - percentageResult);

//1. Стоимость всех дополнительных услуг:

let allServicePrices;

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2
}

allServicePrices = getAllServicePrices();
console.log('Стоимость всех дополнительных услуг: ' + allServicePrices);

//2. Стоимость всех дополнительных услуг и вёрстки:

function getFullPrice() {
  return allServicePrices + screenPrice  
}

fullPrice = getFullPrice();
console.log('Стоимость всех дополнительных услуг и вёрстки: ' + fullPrice);

//3. Название проекта:

let newTitle

const getTitle = function() {
  return titleProject[0].toUpperCase () + titleProject.slice(1).toLowerCase()  
}

newTitle = getTitle();
console.log('Название проекта: ' + newTitle);

//4. Итоговая стоимость за вычетом процента подрядчику:

const getServicePercentPrices = function() {
  return fullPrice - servicePercentPrice
}

servicePercentPrice = getServicePercentPrices ();
console.log('Итоговая стоимость за вычетом процента подрядчику:' + servicePercentPrice);

//5. Скидка для клиента:

let rollbackMessage

const getRollbackMessage = function() {
  let message
  if (fullPrice > 50000) {
  message = 'Скидка 10%';
} else if (fullPrice > 20000 && fullPrice < 50000) {
  message = 'Скидка 5%';
} else if (fullPrice > 0 && fullPrice < 20000) {
  message = 'Скидка не предусмотрена';
} else if (fullPrice < 0) { 
  message = 'Что-то пошло не так';
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) { 
  message = 'Проверка на строгое равенство';
}  
return message
}

rollbackMessage = getRollbackMessage();
console.log('Скидка для клиента: ' + rollbackMessage);

