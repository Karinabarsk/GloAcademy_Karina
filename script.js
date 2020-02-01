'use strict';

let arr = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];

let am = arr[6].italics();
let bm = arr[5].italics();
let cm = arr[5].bold();

arr.splice(5, 2);
arr.push(cm, am);
document.write(arr.join('<br \/>'));

