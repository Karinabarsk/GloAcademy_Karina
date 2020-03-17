'use strict';

//Перезвоните мне
const popup = () => {

    const btn = document.querySelector('.call-btn');
    const popup = document.querySelector('.popup');

    btn.addEventListener('click', () => {
        const popupCall = document.querySelector('.popup-call');
        popupCall.style.display = 'block';

    popup.addEventListener('click', (event) => {
            let target = event.target;
     
            if (target.classList.contains('popup-close')) {
               popup.style.display = 'none';
            } else {
               target = target.closest('.popup-content');
               if (!target) {
                  popup.style.display = 'none';
               }
            }
     
         });
});

};

popup();



  // Валидация форм
  let bodyTag = document.querySelector('body');
  bodyTag.addEventListener('input', (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.matches('input[name="user_phone"]')) {
          target.value = target.value.replace(/[^\+\d]/g, '');
      } else if (target.matches('input[name="user_name"]') || target.matches('input[name="user_message"]')) {
          target.value = target.value.replace(/[^а-яА-Яa-zA-Z,.!?"';: ]/, '');
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
  
            let img = document.createElement('IMG');
            img.src = './img/favicon/favicon-16x16.png';
            img.style.height = '200px';
            target.appendChild(img);
  
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
            statusMessage.style.color = 'white';
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

const nextAcordion = () => {

  let nextBtn = document.querySelectorAll('.construct-btn');
  let panel = document.querySelectorAll('.panel-collapse');

  for(let i = 0; i < nextBtn.length; i++){
    nextBtn[i].onclick = function () {
      for(let x = 0; x < panel.length; x++){
        if (panel[x].style.display == 'none' ){
          panel[x].style.display = 'block';
        }   else {
          panel[x].style.display = 'none';
        }
      }
      };
     return false;
} 

};
nextAcordion();


// Удаление блока

const oneCase = () => {

  
  const switchTypeInput = document.querySelector('.onoffswitch-checkbox')[0];
  const select = document.querySelector('.select-box')[2];

  let data = {
    type: true, //true - однокамерный, false - двухкамерный
};

  select.style.display = 'none';

  switchTypeInput.addEventListener('input', event => {
    if (switchTypeInput.checked) { //однокамерный

        data.type = true;
        select.style.display = 'none';

    } else { //двухкамерный
        data.type = false;
        secondWell.style.display = 'block';
    }

  });



  /* const inputCheckbox = document.getElementById('myonoffswitch');
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
            
            if(inputCheckbox.checked){
                element.classList.remove(hiddenClass);
            }
            else{
                element.classList.add(hiddenClass);
            }
            
        });
        
    };
    
    inputCheckbox.checked = true;
    
    onoffswitchLabel.addEventListener('click', listenerCheckbox());*/

};

oneCase();

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