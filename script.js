'use strict';

let startMoney = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName ('button'),
    incomePlus = btnPlus[0],
    expensesPlus= btnPlus[1],
    box = document.querySelectorAll('.deposit-label'),
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomItem = document.querySelectorAll('.additional_income-item'),
    incomeOne = additionalIncomItem[0],
    incomeTwo = additionalIncomItem[1],
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
    additionalExpenses = document.querySelector('.additional_expenses-title'),
    additionalExpensesItem = document.querySelector ('.additional_expenses-item'),
    targetAmount = document.querySelector ('.target-amount'),
    targetMonthValue = document.querySelector('.target_month-value'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodAmount = document.querySelector ('.period-amount'),
    periodSelect = document.querySelector('.period-select');


let isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
      };
      
      let appData = {
      
          income: {},
          incomeMonth:0,
          addIncome: [],
          expenses: {},
          addExpenses: [],
          budget: 0,
          budgetDay: 0,
          budgetMonth: 0,
          expensesMonth:0,
          deposit: false,
          percentDeposit:0,
          moneyDeposit: 0,

          start: function() {
            if(salaryAmount.value === ''){
              startMoney.style.display = 'block';
           return;
            }
            appData.budget = +salaryAmount.value;

            console.log('salaryAmount.value:', salaryAmount.value);

            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();

            appData.showResult();
          },

          showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcSavedMoney();
            periodSelect.addEventListener('change', function(){
            incomePeriodValue.value = appData.calcSavedMoney();});
    },

      addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          expensesPlus.style.display = 'none';
        }
      },
      
        getExpenses: function(){
          expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector ('.expenses-title').value;
            let cashExpenses = item.querySelector ('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
         });
        },

        addIncomeBlock: function(){
          let cloneIncomeItem = incomeItems[0].cloneNode(true);
          incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
          incomeItems = document.querySelectorAll('.income-items');
          if (incomeItems.length === 3){
              incomePlus.style.display = 'none';
          }
      },

        getIncome: function () {
          incomeItems.forEach(function(item){
              let itemsIncome = item.querySelector ('.income-title').value;
              let itemsCash = item.querySelector ('.income-amount').value;
              if (itemsIncome !== '' && itemsCash !== ''){
                  appData.income[itemsIncome] = +itemsCash;
              }
          });
      },  

        getAddExpenses: function() {
          let addExpenses = additionalExpensesItem.value.split(',');
          addExpenses.forEach(function(item){
              item = item.trim(); /*Убирает пробелы в начале и в конце*/ 
              if (item !== ''){
                  appData.addExpenses.push(item);
              }
          }); 
      },

      getAddIncome: function(){
        additionalIncomItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue); 
            }
        });
    },
        
    getExpensesMonth: function() {
            let sumExpenses = 0;
            for (let key in appData.expenses) {
                sumExpenses += appData.expenses[key];
            }
            appData.expensesMonth = +sumExpenses;
          },
      
          getBudget: function(){
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            console.log ('Бюджет на месяц' + ' ' + appData.budgetMonth);
            appData.budgetDay = (appData.budgetMonth/30);
              if (appData.budgetDay < 0) {
            console.log ('что то пошло не так');
              }
            console.log ('Бюджет на день' + ' ' + Math.floor(appData.budgetDay));
          },
          
          getTargetMonth: function () {
            return targetAmount.value/appData.budgetMonth;    
          },

          
          calcSavedMoney: function () {
            return appData.budgetMonth * periodSelect.value;
         },
         
         rangePeriod: function () {
          periodAmount.textContent = periodSelect.value;
      }, 
      
          /*getStatusIncome: function (){ 
            if (appData.budgetDay >= 20) {
              return ('Высокий уровень дохода');
            } else if (appData.budgetDay >= 10 && appData.budgetDay < 20) {
              return ('Средний уровень дохода');
            } else if (appData.budgetDay >= 0 && appData.budgetDay < 10) {
              return ('Низкий уровень дохода');
            } else if (appData.budgetDay < 0) {
              return ('Что-то пошло не так');
            }
            
            },*/
            
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
      
          
      
      };
      
      startMoney.addEventListener('click', appData.start);
      expensesPlus.addEventListener('click', appData.addExpensesBlock);
      incomePlus.addEventListener ('click', appData.addIncomeBlock);
      periodSelect.addEventListener('input', function() {
      appData.rangePeriod();
});
cancel.addEventListener('click', appData.reset); 
     
     /* console.log('Цель будет достигнута за:', appData.getTargetMonth() , 'месяцев');
      
      appData.getInfoDeposit();
      
      let arr = appData.addExpenses;
      
      let itemsList = '';
      
      if (arr.length>0) {
          let n = 1;
          for (let item of arr) {
              let modifiedItem = item.replace(/\s/g, '');
      
              itemsList = itemsList + ((n === 1) ? '' : ', ') + (modifiedItem.charAt(0).toUpperCase() + 
              modifiedItem.substr(1));
              n++;
          }
      }
      console.log(itemsList);    
      
      /*for (let key in appData) {
        console.log ('Наша программа включает в себя данные: ' + key + appData[key]);
      } */