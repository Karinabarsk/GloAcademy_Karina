'use strict';

let startMoney = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlusIncome = document.getElementsByTagName ('button')[0],
    btnPlusExpenses = document.getElementsByTagName ('button')[1],
    box = document.querySelectorAll('.deposit-label'),
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomItemOne = document.querySelectorAll('.additional_income-item')[0],
    additionalIncomItemTwo = document.querySelectorAll('.additional_income-item')[1],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue= document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonth = document.getElementsByClassName('result-target_month')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses-title'),
    additionalExpensesItem = document.querySelector ('.additional_expenses-item'),
    targetAmount = document.querySelector ('.target-amount'),
    targetMonthValue = document.querySelector('.target_month-value'),
    periodAmount = document.querySelector ('.period-amount'),
    periodSelect = document.querySelector('.period-select');


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
          percentDeposit:0,
          moneyDeposit: 0,
          mission: 10000,
          period: 3,
          asking: function () {
      
            if (confirm ('Есть ли у вас дополнительный заработок?')){
      
              let itemIncome;  
              
              do { prompt ('Какой у вас дополнительный заработок?', 'Такси');}
                  while (itemIncome === '' || itemIncome === null || !isNaN(itemIncome));
              
              let cashIncome;
              
                  do { cashIncome  = prompt('Какую сумму зарабатываете на этом?', 500);}
                  while (!isNumber(cashIncome ) || cashIncome  === '' || cashIncome  === null);
                  
          appData.income[itemIncome] = cashIncome;              
          }
      
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
            
            getInfoDeposit: function () {
              if (appData.deposit){
                  /*appData.percentDeposit = prompt('Какой годовой процент?', '10');*/
      
                  do { appData.percentDeposit  = prompt('Какой годовой процент?', '10');}
                  while (!isNumber( appData.percentDeposit ) ||  appData.percentDeposit  === '' ||  appData.percentDeposit  === null);
                  
                  /*appData.moneyDeposit = prompt ('Какая сумма заложена?', 10000);*/
      
                  do { appData.moneyDeposit  = prompt('Какая сумма заложена?', 10000);}
                  while (!isNumber( appData.moneyDeposit) ||  appData.moneyDeposit  === '' ||  appData.moneyDeposit  === null);
              }
          },
      
          calcSavedMoney: function () {
            return appData.budgetMonth * appData.period;
         } 
          
      
      };
      
      appData.asking();
      appData.getExpensesMonth();
      appData.getBudget();
      console.log('Цель будет достигнута за:', appData.getTargetMonth() , 'месяцев');
      console.log(appData.getStatusIncome());
      
      appData.getInfoDeposit();
      
      let arr = appData.addExpenses;
      
      let itemsList = '';
      
      if (arr.length>0) {
          let n = 1;
          for (let item of arr) {
              let modifiedItem = item.replace(/\s/g, '');
      
              itemsList = itemsList + ((n === 1) ? '' : ', ') + (modifiedItem.charAt(0).toUpperCase() + modifiedItem.substr(1));
              n++;
          }
      }
      console.log(itemsList);    
      
      for (let key in appData) {
        console.log ('Наша программа включает в себя данные: ' + key + appData[key]);
      } 