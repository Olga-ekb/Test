let screenPrice = 300;

let titleProject = prompt('Название проекта?');
console.log('Название проекта: ' + titleProject);

let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
console.log('Типы экранов: ' + screensValue);

let responsive = prompt('Нужен респонсивный сайт? (да/нет)');
console.log('Нужен ли респонсивный сайт: ' + responsive);

let service1 = prompt('Какой сервис нужен?');
console.log('Какой сервис нужен?: ' + service1);

let servicePrice1 = prompt('Сколько это будет стоить?');
console.log('Сколько это будет стоить?: ' + servicePrice1);

let service2 = prompt('Какой ещё сервис тебе нужен?');
console.log('Какой ещё сервис тебе нужен?: '+ service2);

let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');
console.log('Сколько будет стоить этот второй сервис?: ' + servicePrice2);

let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log('Общая стоимость проекта: ' + fullPrice);

let percentage = fullPrice * 0.3;
console.log('Процент подрядчику/партнеру: ' + percentage);

let servicePercentPrice = Math.round (fullPrice - percentage);
console.log('Итого: ' + servicePercentPrice);


if (fullPrice >= 50000) {
  console.log('Скидка 10%');
} else if (fullPrice >= 20000) {
  console.log('Скидка 5%');
} else if (fullPrice >= 0) {
  console.log('Скидка не предусмотрена');
} else if (fullPrice <= -0) { 
  console.log('Что-то пошло не так');
}