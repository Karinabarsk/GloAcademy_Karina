'use strict';

let randomNum;

let ask = function() {

  let start = function(){
    randomNum = Math.round((Math.random() * (100 - 1) + 1));
  };

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


else if (a == randomNum) {
  alert("Правильно!");
} else if (a !== randomNum){
  return ask();
}

};

ask();

