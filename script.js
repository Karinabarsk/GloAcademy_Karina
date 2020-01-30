'use strict';

let ask = function() {

  let a = +prompt('Угадай число от 1 до 100');
  if( a > 100) {
    alert('Загаданное число меньше');
    return ask();
}

    else if( a < 0){
    alert('Загаданное число больше');
    return ask();
}

  else if (isNaN(a)){
  alert('Введи число!');
  return ask();
}

else if ( a == false){
  alert('Игра закончена');
}

else {
  alert("Правильно!");

}
};

ask();

