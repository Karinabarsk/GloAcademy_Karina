'use strict';

let money = +prompt('Ваш месячный доход?', '5000'), 
    income = 'фриланс', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин'),  
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000, 
    period = 6;

let showTypeOf = function (data) {
  console.log(data, typeof(data)); 
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?', 'бензин'),
    expenses2 = prompt('Введите обязательную статью расходов?','коммуналка');

let getExpensesMonth = function() {

  let amount = 0;
  
  for ( let i = 0; i<2; i++ ){
    amount += +prompt('Во сколько это обойдется?', '250');
  }  
    return amount;

}
getExpensesMonth();

let getAccumulatedMonth = function(){
  let accumulated = (money - getExpensesMonth());

  return accumulated;
};

let accumulatedMonth = getAccumulatedMonth();

console.log('Бюджет на месяц:', accumulatedMonth, 'euro');

let getTargetMonth = function () {
  let target = Math.ceil(mission/accumulatedMonth);

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

