'use strict';


let ask = function() {
  

  let a = +prompt('Угадай число от 1 до 100');
  let attempts = 9;

  if ( a > 100) {
    alert('Загаданное число меньше, осталось попыток' + ' ' + attempts);
    return ask();
}

attempts--;

    if( a < 1){
    alert('Загаданное число больше, осталось попыток'  + ' ' + attempts);
    return ask();
}

attempts--;

  if (isNaN(a)){
  alert('Введи число!');
  return ask();
}

if ( a == false){
  alert('Игра закончена');
  return;
}

let i = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

if (i == true) {
    return ask();
  } else {
    alert('Игра закончена');
    return;
  }
};

ask();

