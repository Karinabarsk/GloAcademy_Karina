'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function() {
  do { money = prompt('Ваш месячный доход?');}
  while (!isNumber(money));
};

start();

let appData = {

    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth:0,
    deposit: false,
    mission: 10000,
    period: 3,
    asking: function () {

          let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, интернет, такси');
          appData.addExpenses = addExpenses.toLowerCase().split(',');  
          appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let listExpenses,
        valueExpenses,
        objExpenses = {};

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            listExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
        } else {
            listExpenses = prompt('Какие еще обязательные ежемесячные расходы у вас есть?');
        }
        do { valueExpenses = prompt('Во сколько это обойдется?');}
        while (!isNumber(valueExpenses));
        objExpenses[listExpenses] = Number(valueExpenses);
    }
    appData.expenses = objExpenses;

    },

    getExpensesMonth: function() {
      let sumExpenses = 0;
      for (let key in appData.expenses) {
          sumExpenses += appData.expenses[key];
      }
      appData.expensesMonth = sumExpenses;
    },

    getBudget: function(){
      appData.budgetMonth = money - appData.expensesMonth;
      console.log ('Бюджет на месяц' + ' ' + appData.budgetMonth);
      appData.budgetDay = (appData.budgetMonth/30);
        if (appData.budgetDay < 0) {
      console.log ('что то пошло не так');
        }
      console.log ('Бюджет на день' + ' ' + Math.floor(appData.budgetDay));
    },
    
    getTargetMonth: function () {
  
      let target = Math.ceil(appData.mission/appData.budgetMonth);
      
      if (target < 0){
        console.log ('Цель не будет достигнута');
        }
    
    if (target > 0) {
        console.log ('Цель будет достигнута');
    }
        return target;
    },

    getStatusIncome: function (){ 
      if (appData.budgetDay >= 20) {
        return ('Высокий уровень дохода');
      } else if (appData.budgetDay >= 10 && appData.budgetDay < 20) {
        return ('Средний уровень дохода');
      } else if (appData.budgetDay >= 0 && appData.budgetDay < 10) {
        return ('Низкий уровень дохода');
      } else if (appData.budgetDay < 0) {
        return ('Что-то пошло не так');
      }
      
      },
    
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log('Цель будет достигнута за:', appData.getTargetMonth() , 'месяцев');
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log ('Наша программа включает в себя данные: ' + key + appData[key]);
}   

