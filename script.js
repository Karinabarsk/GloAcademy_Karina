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

      const AppData = function () {

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
    };
      
          AppData.prototype.start = function() {
            if(salaryAmount.value === ''){
              startMoney.style.display = 'block';
           return;
            }
            this.budget = +salaryAmount.value;

            console.log('salaryAmount.value:', salaryAmount.value);

            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudget();
            this.showResult();
            this.blocked();
          };

          AppData.prototype.blocked = function() {
            document.querySelectorAll('.data input[type=text]').forEach(function(item){
                item.disabled = true;
            });
            startMoney.style.display = 'none';
            cancel.style.display = 'block';
        };

        AppData.prototype.reset = function () {
          this.income = {},
          this.incomeMonth = 0,
          this.addIncome = [],
          this.expenses = {},
          this.addExpenses = [],
          this.budget = 0,
          this.budgetDay = 0,
          this.budgetMonth = 0,
          this.expensesMonth = 0,
          this.deposit = false,
          this.percentDeposit = 0,
          this.moneyDeposit = 0;

          periodAmount.textContent = '1';
          incomePeriodValue.value = 1;
          periodSelect.value = 1;

          let allInputs = document.querySelectorAll('input[type=text]');
          allInputs.forEach(function(item) {
              item.value = '';
              item.disabled = false;
          });
          const _this = this;
          cancel.style.display = 'none';
          startMoney.style.display = 'block';
      
          incomeItems[1].remove();
          incomeItems[2].remove();
          incomePlus.style.display = 'block';
      
          expensesItems[1].remove();
          expensesItems[2].remove();
          expensesPlus.style.display = 'block';
          _this.rangePeriod();
      };
      

        AppData.prototype.showResult = function(){
          const _this = this;
          budgetMonthValue.value = this.budgetMonth;
          budgetDayValue.value = Math.ceil(this.budgetDay);
          expensesMonthValue.value = this.expensesMonth;
          additionalExpensesValue.value = this.addExpenses.join(', ');
          additionalIncomeValue.value = this.addIncome.join(', ');
          targetMonthValue.value = Math.ceil(this.getTargetMonth());
          incomePeriodValue.value = this.calcSavedMoney();
          periodSelect.addEventListener('change', function(){
              incomePeriodValue.value = _this.calcSavedMoney();});
      };

    AppData.prototype.addExpensesBlock = function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          expensesPlus.style.display = 'none';
        }
      };
      
      AppData.prototype.getExpenses = function(){
        const _this = this;
          expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector ('.expenses-title').value;
            let cashExpenses = item.querySelector ('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] = +cashExpenses;
            }
         });
        };

        AppData.prototype.addIncomeBlock = function(){
          let cloneIncomeItem = incomeItems[0].cloneNode(true);
          incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
          incomeItems = document.querySelectorAll('.income-items');
          if (incomeItems.length === 3){
              incomePlus.style.display = 'none';
          }
      };

      AppData.prototype.getIncome = function () {
        const _this = this;
          incomeItems.forEach(function(item){
              let itemsIncome = item.querySelector ('.income-title').value;
              let itemsCash = item.querySelector ('.income-amount').value;
              if (itemsIncome !== '' && itemsCash !== ''){
                  _this.income[itemsIncome] = +itemsCash;
              }
          });
      };  

      AppData.prototype.getAddExpenses = function() {
        const _this = this;
          let addExpenses = additionalExpensesItem.value.split(',');
          addExpenses.forEach(function(item){
              item = item.trim(); /*Убирает пробелы в начале и в конце*/ 
              if (item !== ''){
                  _this.addExpenses.push(item);
              }
          }); 
      };

      AppData.prototype.getAddIncome = function(){
        const _this = this;
        additionalIncomItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                _this.addIncome.push(itemValue); 
            }
        });
    };
        
    AppData.prototype.getExpensesMonth = function() {
            let sumExpenses = 0;
            for (let key in this.expenses) {
                sumExpenses += this.expenses[key];
            }
            this.expensesMonth = +sumExpenses;
          };
      
          AppData.prototype.getBudget = function () {
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            this.budgetDay = (this.budgetMonth/30);
        };

          AppData.prototype.getTargetMonth = function () {
            return targetAmount.value/this.budgetMonth;    
          };

          
          AppData.prototype.calcSavedMoney = function () {
            return this.budgetMonth * periodSelect.value;
         };
         
         AppData.prototype.rangePeriod = function () {
        
          periodAmount.textContent = periodSelect.value;
      }; 

      AppData.prototype.eventListener = function () {
        startMoney.addEventListener('click', appData.start.bind(appData));
        expensesPlus.addEventListener ('click', appData.addExpensesBlock);
        incomePlus.addEventListener ('click', appData.addIncomeBlock);
        periodSelect.addEventListener('input', function() {
        appData.rangePeriod();
        incomePeriodValue.value = appData.calcSavedMoney();
      });
        cancel.addEventListener('click', AppData.prototype.reset);
      
      };

      const appData = new AppData();
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