'use strict';

function isNum(number) {
  return (!isNaN(parseFloat(number)) && isFinite(number));
}

const game = function(){
  const randomNum = Math.floor((Math.random() * 100) + 1);

  return function repeat(){

  let num = prompt('Угадай число от 1 до 100');

  if (isNum(num)){
    num = +num;
  if (num > randomNum){
    alert('Загаданное число меньше');
    repeat();
  }  else if (num < randomNum) {
    alert ('Загаданное число больше');
    repeat();
  } else {
    alert ('Победа!');
  } 
  }
  else if (num === null){
    alert('До свидания!');
  } else {
    alert('Введите число');
    repeat();
  }
};  
}; 

const startGame = game();
startGame();
