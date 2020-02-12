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


    const AppData = function(){

          this.income = {};
          this.incomeMonth = 0;
          this.addIncome = [];
          this.expenses = {};
          this.addExpenses = [];
          this.budget = 0;
          this.budgetDay = 0;
          this.budgetMonth = 0;
          this.expensesMonth = 0;
          this.deposit = false;
          this.percentDeposit = 0;
          this.moneyDeposit = 0;

    }

    const appData = new AppData();
    console.log(appData);

     
        startMoney.addEventListener('click', appData.start.bind(appData));
        expensesPlus.addEventListener ('click', appData.addExpensesBlock);
        incomePlus.addEventListener ('click', appData.addIncomeBlock);
        periodSelect.addEventListener('input', function() {
        appData.rangePeriod();
        incomePeriodValue.value = appData.calcSavedMoney();
      });
        cancel.addEventListener('click', AppData.prototype.reset);
      
      };

    
    AppData.prototype.eventListener();
    
      
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
            
            },
            
            AppData.prototype.getInfoDeposit = function () {
              if (appData.deposit){
                  appData.percentDeposit = prompt('Какой годовой процент?', '10');
      
                  do { appData.percentDeposit  = prompt('Какой годовой процент?', '10');}
                  while (!isNumber( appData.percentDeposit ) ||  appData.percentDeposit  === '' ||  appData.percentDeposit  === null);
                  
                  appData.moneyDeposit = prompt ('Какая сумма заложена?', 10000);
      
                  do { appData.moneyDeposit  = prompt('Какая сумма заложена?', 10000);}
                  while (!isNumber( appData.moneyDeposit) ||  appData.moneyDeposit  === '' ||  appData.moneyDeposit  === null);
              }   
      };

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