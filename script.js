'use strict';

function isNum(number) {
  return (!isNaN(parseFloat(number)) && isFinite(number));
}


const game = function(){
  const randomNum = Math.floor((Math.random() * 100) + 1);

  let quanity = 10;

  return function repeat(){
    
  let num = prompt('Угадай число от 1 до 100');
  
  quanity = (quanity - 1);

  let doYouWant;
  if (quanity === 0 ){
   console.log(quanity);
    doYouWant = confirm('У вас нет попыток, игра окончена, хотите сыграть ещё');
  } if ( doYouWant === true){
   game()();
  } else if ( doYouWant === false) {
   alert('Пока');
  }

  if (isNum(num)){
    num = +num;

  if (num > randomNum){
    alert('Загаданное число меньше');
    alert('Осталось попыток' + ' ' + quanity);
    repeat();
  } 
  else if (num < randomNum) {
    alert ('Загаданное число больше');
    alert('Осталось попыток' + ' ' + quanity);
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
  let what;

   if (randomNum == num ) {
      what = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
   }
   if (what === true ){
    game()();
      
   } else if ( what === false) {
     alert('Пока');
  }
};  
}; 

const startGame = game();
startGame();
