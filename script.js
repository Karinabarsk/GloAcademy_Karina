'use strict';

let day = new Date();
let hour = new Date();
let minutes = new Date();
let seconds = new Date();

function TimesOfDay () {

    if(hour.getHours()>6 && hour.getHours()<12){
        document.write('Доброе утро Андрей!');
    } else if (hour.getHours()>12 && hour.getHours()<18){
        document.write('Добрый день Андрей!');
    } else if (hour.getHours()>18 && hour.getHours()<24) {
        document.write('Добрый вечер Андрей!');
    } else {
        document.write('Иди спать Андрей!');
    }
}
TimesOfDay();

let weekday=new Array(7);
weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";

document.write(`<p>${"Сегодня: " + weekday[day.getDay()]}</p>`); 

let t = new Date();
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
let ampm = hour >= 12 ? 'pm' : 'am';

document.write(`<p>${'Текущее время:' + checkTime(t.getHours()) + "." + checkTime(t.getMinutes()) + "." + (checkTime(t.getSeconds())) + ' ' + ampm}</p>`);

function daysLeftNewYear() {  
    let today = new Date(),
        nextDate = new Date("December 31, 2020"),
        msPerDay = 24*60*60*1000,
        daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay),
        dayname = "",
        ds = ""+daysLeft,
        dd=parseInt(ds.substr(ds.length-1));

    
    if(daysLeft>4&&daysLeft<21)dayname=" дней";
    else
    if(dd==1)dayname=" день";
    else
    if(dd==2||dd==3||dd==4)dayname=" дня";
    else dayname=" дней";
 
    if(daysLeft<0) {document.write("С новым годом!!!");}

    else if(daysLeft==0) {document.write("Завтра новый год!");}

    else {document.write("До нового года осталось "+daysLeft+dayname+"!");}

  }

  daysLeftNewYear();