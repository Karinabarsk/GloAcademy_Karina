'use strict';

let day = new Date();
let hour = new Date();
let minutes = new Date();
let seconds = new Date();
let ld = new Date();
let lt = new Date();

let weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";

let month=new Array(12);
month[0]="Января";
month[1]="Февраля";
month[2]="Марта";
month[3]="Апреля";
month[4]="Майя";
month[5]="Июня";
month[6]="Июля";
month[7]="Августа";
month[8]="Сентября";
month[9]="Октября";
month[10]="Ноября";
month[11]="Декабря";

document.write("Сегодня " + weekday[day.getDay()] + ' ' + day.getDate() + ' ' + month[day.getMonth()] + ' ' + day.getFullYear() + ' ' + 'года' + ', ' + hour.getHours() +  ' часов' + ' ' + minutes.getMinutes() + ' минут ' + seconds.getSeconds() + ' секунд');

document.write(`<p>${ld.toLocaleDateString() + ' - ' + lt.toLocaleTimeString()}</p>`);

let timerId = setInterval(() => alert(ld.toLocaleDateString() + ' - ' + lt.toLocaleTimeString()), 1000);

