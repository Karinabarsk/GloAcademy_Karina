'use strict';

//Перезвоните мне
const popup = () => {

    const btn = document.querySelectorAll('.call-btn');

    for (let buttonIm of btn) {
      buttonIm.addEventListener('click', (event) => {
        const popupCall = document.querySelector('.popup-call');
        popupCall.style.display = 'block';

    popupCall.addEventListener('click', (event) => {
            let target = event.target;
     
            if (target.classList.contains('popup-close')) {
               popupCall.style.display = 'none';
            } else {
               target = target.closest('.popup-content');
               if (!target) {
                  popupCall.style.display = 'none';
               }
            }
     
         });
});

}
};

popup();


  // Валидация форм
  let bodyTag = document.querySelector('body');
  bodyTag.addEventListener('input', (event) => {
      event.preventDefault();
      let target = event.target;
      target.value = target.value.replace(/[a-z]/gi,'');
      if (target.matches('input[name="user_phone"]')) {
          target.value = target.value.replace(/[^\+\d]/g, '');
      } else if (target.matches('input[name="user_name"]') || target.matches('input[name="user_message"]')) {
        target.value = target.value.replace(/[a-z]/gi,'');
      } else if (target.matches('input[name="user_email"]')) {
          target.value = target.value.replace(/[а-яА-Я]/gi, '');
      }
    });
  
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

//Отправка форм
const sendForm = () => {
    const loadMessage = 'Загрузка...';
    let bodyTag = document.querySelector('body');
    let allInputs = document.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
  
    bodyTag.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        let successMessage = () => {
            statusMessage.textContent = 'Данные успешно отправлены!';
  
            allInputs.forEach((item) => {
                item.value = '';
            });
        };
  
        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
  
        let errorMessage = () => {
            statusMessage.textContent = 'Что-то пошло не так...';
            console.error("Что-то пошло ...");
        };
  
        if (target.matches('form')) {
            statusMessage.textContent = loadMessage;
            statusMessage.style.color = 'black';
            target.appendChild(statusMessage);
        }
  
        postData(body)
        .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Network status is not 200');
                }
                successMessage();
            })
            .catch(errorMessage);

  });
};

  sendForm();
  
//Аккордион

const panelAcordion = () => {

 let acc = document.querySelectorAll('.panel-heading');
 let panel = document.querySelectorAll('.panel-collapse');

 panel[0].classList.add('show');
 panel[0].classList.add('in');

for(let i = 0; i < acc.length; i++){
  acc[i].onclick = function () {
    for(let x = 0; x < panel.length; x++){
      panel[x].classList.remove('show');
      panel[x].classList.remove('in');
    }
    this.nextElementSibling.classList.toggle('show');
    this.nextElementSibling.classList.toggle('in');
  };

}

};

panelAcordion();

//Кнопка следующий шаг

const accordions = () => {

const firstAcc = document.querySelector('#accordion'),
      secondAcc = document.querySelector('#accordion-two'),
      allHeadingPanel = document.querySelectorAll('a[role="button"]'),
      allCollapsePanel = document.querySelectorAll('.panel-collapse'),
      collapsePanelBtn = document.querySelectorAll('.construct-btn');

const toggleAcc = index => {

    for (let i = 0; i < allCollapsePanel.length; i++) {
      if (index === i) {
        allCollapsePanel[i].classList.toggle('in');
      } else {
        allCollapsePanel[i].classList.remove('in');
      }
    }
  };

  const toggleBtn = index => {

    for (let i = 0; i < allCollapsePanel.length; i++) {
      if (index === i) {
        i++;
        allCollapsePanel[i].classList.add('in');
      }
    };
  };

  firstAcc.addEventListener('click', event => {

    let target = event.target;

    target = target.closest('a[role="button"]')

    if (target) {

      allHeadingPanel.forEach((item, i) => {
        if (item === target) {
          toggleAcc(i);
        }
      });
    }

    target = event.target;
    while (target !== firstAcc) {
      if (target.classList.contains('construct-btn')) {
        
        collapsePanelBtn.forEach((item, i) => {
          if (item === target) {
            toggleBtn(i);
          }
        });
      };

      target = target.parentNode;
    };
  });

  secondAcc.addEventListener('click', event => {

    let target = event.target;

    if (target.closest('a[role="button"]')) {

      allHeadingPanel.forEach((item, i) => {
        if (item === target) {
          toggleAccord(i);
        }
      });
    }
  });

};

accordions();

// Удаление блока

const createBlock = () => {
    
  const offswitch = document.getElementById('myonoffswitch');
  const onoffswitchLabel = document.querySelector('.onoffswitch-label');
  
  const hiddenElementIdList = [
      'title-well-two',
      'select-one-well-two',
      'select-two-well-two'
  ];
  
  const hiddenClass = 'hidden';
  
  const listenerCheckbox = (event) => {
      
      hiddenElementIdList.forEach( (elementId) => {
          
          const element = document.getElementById(elementId);
          
          if(offswitch.checked){
              element.classList.remove(hiddenClass);
          }
          else{
              element.classList.add(hiddenClass);
          }
          
      });
      
  };
  
  offswitch.checked = false;
  
  onoffswitchLabel.addEventListener('click', listenerCheckbox);
  
};

createBlock();

// Калькулятор

const calc = () => {
    
  const inputCheckboxType = document.getElementById('myonoffswitch');
  const selectDiameterWellOne = document.getElementById('diameter-well-one');
  const selectRngsWellOne = document.getElementById('rings-well-one');
  const selectDiameterWellTwo = document.getElementById('diameter-well-two');
  const selectRngsWellTwo = document.getElementById('rings-well-two');
  const inputCheckboxBottom = document.getElementById('myonoffswitch-two');
  const inputCalcResult = document.getElementById('calc-result');
  
  let cost = 0;
  
  if(inputCheckboxType.checked){
      cost = 10000;
  }
  else{
      cost = 15000;
  }
  
  if(selectDiameterWellOne.selectedIndex === 1){
      cost += cost * 0.2;
  }
  
  if((!inputCheckboxType.checked) && selectDiameterWellTwo.selectedIndex === 1){
      cost += cost * 0.2;
  }
  
  if(selectRngsWellOne.selectedIndex === 1){
      cost += cost * 0.3;
  }
  else if(selectRngsWellOne.selectedIndex === 2){
      cost += cost * 0.5;
  }
  
  if(!inputCheckboxType.checked){
      
      if(selectRngsWellTwo.selectedIndex === 1){
          cost += cost * 0.3;
      }
      else if(selectRngsWellTwo.selectedIndex === 2){
          cost += cost * 0.5;
      }
      
  }
  
  if(inputCheckboxBottom.checked){
      
      if(inputCheckboxType.checked){
          cost += 1000;
      }
      else{
          cost += 2000;
      }
      
  }
  
  inputCalcResult.value = String(cost);
  
};


const addListenerForСalculateCost = () => {
  
  const runСalculatElementIdList = [
      'myonoffswitch',
      'diameter-well-one',
      'rings-well-one',
      'diameter-well-two',
      'rings-well-two',
      'myonoffswitch-two',
      'distance-to-house'
  ];

const calculateBtn = document.getElementById('calculate-btn');
  
  const listenerRunСalculate = (event) => {
      
      calculateCost();
      
  };
  
  runСalculatElementIdList.forEach( (elementId) => {
      
      const element = document.getElementById(elementId);
      
      element.addEventListener('input', calculateCost);
      
  });

calculateBtn.addEventListener('click', calculateCost);
  
};

 calc();
  



// Кнопка больше

const btnMore = () => {
    
  const addSentenceBtn = document.querySelector('.add-sentence-btn');
  const parent = addSentenceBtn.parentElement;
  
  const removeClasses = ['hidden', 'visible-sm-block'];
  
  addSentenceBtn.addEventListener('click', () => {
  
      addSentenceBtn.style.display = 'none';
      
      removeClasses.forEach( (removeClass) => {
          
          const elementList = parent.querySelectorAll('.' + removeClass);
          
          elementList.forEach( (element) => {
              element.classList.remove(removeClass);
          });
          
      });
      
  });
  
};

btnMore ();

// Узнать цену и скидку

const discount = () => {

  const btnDisc = document.querySelectorAll('.sentence-btn');



  for (let buttonItem of btnDisc) {
    buttonItem.addEventListener('click', (event) => {
      const popupD = document.querySelector('.popup-discount');
      popupD.style.display = 'block';

      popupD.addEventListener('click', (event) => {
        let target = event.target;
 
        if (target.classList.contains('popup-close')) {
           popupD.style.display = 'none';
        } else {
           target = target.closest('.popup-content');
           if (!target) {
              popupD.style.display = 'none';
           }
        }


    });
  })
};
};

discount();

// Получить чек-лист и скидку

const checkList = () => {

  const btnSale = document.querySelector('.gauging-button');

  btnSale.addEventListener('click', () => {
      const popupCheck = document.querySelector('.popup-check');
      popupCheck.style.display = 'block';

  popupCheck.addEventListener('click', (event) => {
          let target = event.target;
   
          if (target.classList.contains('popup-close')) {
             popupCheck.style.display = 'none';
          } else {
             target = target.closest('.popup-content');
             if (!target) {
                popupCheck.style.display = 'none';
             }
          }
   
       });
});

};


checkList();


// Консультация

const consultation = () => {

  const btnCons = document.querySelector('.consultation-btn');

  btnCons.addEventListener('click', () => {
    const popCons = document.querySelector('.popup-consultation')

    popCons.style.display = 'block';

    popCons.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
         popCons.style.display = 'none';
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popCons.style.display = 'none';
         }
      }

   });

  });

};

consultation();

//

const addElementToObj = (formElement, obj) => {
	
	const popupCall = document.querySelector('.popup-call');
	const popupConsultation = document.querySelector('.popup-consultation');
	const classPopupCalculate = 'popup-calculate';
	
	if(popupCall.contains(formElement)  && popupCall.classList.contains(classPopupCalculate)){
		
		const inputCheckboxType = document.getElementById('myonoffswitch');
		const selectDiameterWellOne = document.getElementById('diameter-well-one');
		const selectRngsWellOne = document.getElementById('rings-well-one');
		const selectDiameterWellTwo = document.getElementById('diameter-well-two');
		const selectRngsWellTwo = document.getElementById('rings-well-two');
		const inputCheckboxBottom = document.getElementById('myonoffswitch-two');
		const inputCalcResult = document.getElementById('calc-result');
		
		obj['inputCheckboxType'] = !inputCheckboxType.checked;
		obj['selectDiameterWellOne'] = selectDiameterWellOne.value;
		obj['selectRngsWellOne'] = selectRngsWellOne.value;
		obj['selectDiameterWellTwo'] = selectDiameterWellTwo.value;
		obj['selectRngsWellTwo'] = selectRngsWellTwo.value;
		obj['inputCheckboxBottom'] = inputCheckboxBottom.checked;
		obj['inputCalcResult'] = inputCalcResult.value;
		
	}
	else if(popupConsultation.contains(formElement)){
		
		const consultationInput = document.getElementById('consultation-input');
		
		obj['consultationInput'] = consultationInput.value;
		
	}
	
};

addElementToObj();

