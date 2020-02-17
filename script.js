'use strict';

let startMoney = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName ('button'),
    incomePlus = btnPlus[0],
    expensesPlus= btnPlus[1],
    box = document.querySelectorAll('.deposit-label'),
    depositCheck = document.querySelector('#deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
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

      class AppData {
        constructor(prop) {
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
      
        start() {
          if(salaryAmount.value === ''){
            startMoney.style.display = 'block';
         return;
          }
          this.budget = +salaryAmount.value;

         this.getExpenses();
         this.getIncome();
         this.getExpensesMonth();
         this.getAddExpenses();
         this.getAddIncome();
         this.getInfoDeposit();
         this.getBudget();
         this.showResult();
         this.blocked();
               }
      
      blocked() {
              document.querySelectorAll('.data input[type=text]').forEach((item) =>{
                  item.disabled = true;
              });
              startMoney.style.display = 'none';
              cancel.style.display = 'block';
          }
      reset() {
            periodAmount.textContent = '1';
            incomePeriodValue.value = 1;
            periodSelect.value = 1;
  
            const allInputs = document.querySelectorAll('input[type=text]');
            allInputs.forEach((item) => {
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
        }
      
      showResult(){
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
      }

      addExpensesBlock() {
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          expensesPlus.style.display = 'none';
        }
      }

      getExpenses(){
            expensesItems.forEach((item) => {
              let itemExpenses = item.querySelector ('.expenses-title').value;
              let cashExpenses = item.querySelector ('.expenses-amount').value;
              if (itemExpenses !== '' && cashExpenses !== ''){
                  this.expenses[itemExpenses] = +cashExpenses;
              }
           });
      }

      addIncomeBlock(){
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    }

      getIncome(){
        incomeItems.forEach((item)=>{
            let itemsIncome = item.querySelector ('.income-title').value;
            let itemsCash = item.querySelector ('.income-amount').value;
            if (itemsIncome !== '' && itemsCash !== ''){
                this.income[itemsIncome] = +itemsCash;
            }
        });
    }  

      getAddExpenses() {
      const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item)=>{
            item = item.trim(); /*Убирает пробелы в начале и в конце*/ 
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }); 
    }

      getAddIncome(){
      additionalIncomItem.forEach((item)=>{
          let itemValue = item.value.trim();
          if (itemValue !== ''){
              this.addIncome.push(itemValue); 
          }
      });
  }
      getExpensesMonth() {
        let sumExpenses = 0;
    for (let key in this.expenses) {
        sumExpenses += this.expenses[key];
    }
    this.expensesMonth = +sumExpenses;
  }

    getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit/100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = (this.budgetMonth/30);
  }

    getTargetMonth() {
    return targetAmount.value/this.budgetMonth;    
  }

    getStatusIncome(){ 
    if (this.budgetDay >= 20) {
      return ('Высокий уровень дохода');
    } else if (this.budgetDay >= 10 && this.budgetDay < 20) {
      return ('Средний уровень дохода');
    } else if (this.budgetDay >= 0 && this.budgetDay < 10) {
      return ('Низкий уровень дохода');
    } else if (this.budgetDay < 0) {
      return ('Что-то пошло не так');
    }
    }

    getInfoDeposit() {
      if (this.deposit){
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
      }   
    }

    calcSavedMoney(){
      return this.budgetMonth * periodSelect.value;
   }

    rangePeriod() {
        
    periodAmount.textContent = periodSelect.value;
  }

  changePercent(){
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
    } else {
      depositPercent.value = valueSelect;
    }
  }

  userheck(){
    if (depositPercent !== isNumber || depositPercent <= 0 && depositPercent >= 100){
      alert("Введите корректное значение в поле проценты");
      this.startMoney.style.display = 'none';
      return;
    } 
  }
 

  depositHandler(){
    if (depositCheck.checked){
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
  }

    eventListener() {
    startMoney.addEventListener('click', this.start.bind(this));
    expensesPlus.addEventListener ('click', this.addExpensesBlock);
    incomePlus.addEventListener ('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', () => {
    this.rangePeriod();
    incomePeriodValue.value = this.calcSavedMoney();
    
  });
    cancel.addEventListener('click', this.reset.bind(this));
    depositCheck.addEventListener('change',this.depositHandler.bind(this));
    startMoney.addEventListener('click', this.userheck.bind(this));
    
    const addExp = [];
    for (let i = 0; i<this.addExpenses.length; i++){
      let element = this.addExpenses[i].trim();
      element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      addExp.push(element);
    }
  }
      }

      const appData = new AppData();
      appData.eventListener();
