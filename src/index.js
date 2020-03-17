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


//

const oneCase = () => {

  let panel = document.getElementsByClassName('panel-body');
  let select = document.getElementsByClassName('select-box');
  let one = document.querySelector('.onoffswitch-label');

let foo = function() {
 
  if (one.style.display == 'block'){
    panel.removeChild(select[2]);
    panel.removeChild(select[3]);
  } else {
    select.disabled = false;
  };
 
}
foo();

};

oneCase();

