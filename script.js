'use strict';

let week = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];
let toDay = new Date().getDay() - 1;

/*let am = arr[6].italics();
let bm = arr[5].italics();
let cm = arr[5].bold();

arr.splice(5, 2);
arr.push(cm, am);
document.write(arr.join('<br \/>'));*/


for (let i = 0; i < week.length; i++) {
    if (i === toDay) {
     if (week[i] === 'суббота' || week[i] === 'воскресенье') {
       document.write(week[i].bold().italics());
       } else {
         document.write(week[i].bold());
       }
     } else if (week[i] === 'суббота' || week[i] === 'воскресенье') {
       document.write(`<p>${week[i].bold().italics()}</p>`);
     } else {
       document.write(`<p>${week[i]}</p>`);
     }
   }
   console.log(week);