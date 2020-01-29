'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, 
    income = 'фриланс', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин'),  
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000, 
    period = 6;


let start = function() {
  do { money = prompt('Ваш месячный доход?');}
  while (!isNumber(money));
};

start();

let showTypeOf = function (data) {
  console.log(data, typeof(data)); 
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let expenses = [];

let getExpensesMonth = function() {

  let amount = 0;
  
  for ( let i = 0; i<2; i++ ){

      expenses [i] = prompt('Введите обязательную статью расходов?');
      amount += +prompt('Во сколько это обойдется?');
  }
  
  if (!isNumber(amount)) {
    alert ('Введите ваши расходы');

    return false;}
  
    return amount;
    
};

let getAccumulatedMonth = function(){

  let accumulated = (money - getExpensesMonth());

  return accumulated;
};

let accumulatedMonth = getAccumulatedMonth();

console.log('Бюджет на месяц:', accumulatedMonth, 'euro');


let getTargetMonth = function () {
  
  let target = Math.ceil(mission/accumulatedMonth);
  
  if (target < 0){
    console.log ('Цель не будет достигнута');
    }

if (target > 0) {
    console.log ('Цель будет достигнута');
}
    return target;
};

console.log('Цель будет достигнута за:', getTargetMonth() , 'месяцев');

let budgetDay = accumulatedMonth/30;
console.log('Бюджет на день:', Math.floor(budgetDay), 'euro');

let getStatusIncome = function (){ 
if (budgetDay >= 20) {
  return ('Высокий уровень дохода');
} else if (budgetDay >= 10 && budgetDay < 20) {
  return ('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 10) {
  return ('Низкий уровень дохода');
} else if (budgetDay < 0) {
  return ('Что-то пошло не так');
}

};

console.log( getStatusIncome());

