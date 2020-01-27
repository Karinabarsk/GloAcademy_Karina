'use strict';

let money = prompt('Ваш месячный доход?', '5000'), 
    income = 'фриланс', 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин'),  
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000, 
    period = 6;

console.log (typeof money, typeof income, typeof deposit),

console.log (addExpenses.length);

console.log('Период равен:', period, 'месяцев' );
console.log ('Цель заработать', mission, 'euro');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split());

/*money = prompt('Ваш месячный доход?', '5000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');*/

let expenses1 = prompt('Введите обязательную статью расходов?', 'бензин'),
    amount1 = +prompt('Во сколько это обойдется?', '250'),
    expenses2 = prompt('Введите обязательную статью расходов?','коммуналка'),
    amount2 = +prompt('Во сколько это обойдется?', '250');

let budgetMonth = money - (amount1 + amount2);

console.log('Бюджет на месяц:', budgetMonth, 'euro');
console.log('Цель будет достигнута за:', Math.ceil(mission/budgetMonth), 'месяцев');

let budgetDay = budgetMonth/30;
console.log('Бюджет на день:', Math.floor(budgetDay), 'euro');



if (budgetDay >= 20) {
    console.log('Высокий уровень дохода');
  } else if (budgetDay >= 10 && budgetDay < 20) {
    console.log('Средний уровень дохода');
  } else if (budgetDay >= 0 && budgetDay < 10) {
    console.log('Низкий уровень дохода');
  } else if (budgetDay < 0) {
    console.log('Что-то пошло не так');
  }

