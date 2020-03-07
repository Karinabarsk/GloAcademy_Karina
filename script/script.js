window.addEventListener('DOMContentLoaded', function(){

'use strict';

function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining (){
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow)/1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60)%60),
            hours = Math.floor(timeRemaining / 60 / 60);

            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes  = "0" + minutes;
            if (seconds < 10) seconds  = "0" + seconds;
            
            if(timeRemaining === 0 || timeRemaining < 0 ){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                timeRemaining.disabled = true;
            }

            return { timeRemaining, hours, minutes, seconds};
            
        }
       

        function updateClock(){

        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

        if(timer.timeRemaining > 0){
            setInterval(updateClock, 1000);
        }   
        }
       updateClock();
}

countTimer('28 april 2020');


// menu

const toggleMenu = () => {


    const menu = document.querySelector('menu');

      document.addEventListener('click', (event) => {
         let target = event.target;
         if (target = target.closest('.menu')) {
            menu.classList.add('active-menu');
         } else {
            target = event.target;
            if (menu.classList.contains('active-menu')) {
               if (target !== target.closest('.active-menu')) {
                  menu.classList.remove('active-menu');
               } else {
                  if (target !== target.closest('.active-menu')) {
                     menu.classList.remove('active-menu');
                  }
               }
            }
            return;
         }
      });


};
toggleMenu();

const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach((elem) => {
       elem.addEventListener('click', () => {

          const popupContent = document.querySelector('.popup-content');

          if (window.innerWidth > 768) {
             popup.style.display = 'block';
             popupContent.style.top = '0%';
             let activePopup = setInterval(() => {
                if (popupContent.style.top = '20%') {
                   clearInterval(activePopup);
                }
                popupContent.style.transition = "all 1s";
                popupContent.style.top = '20%';
             }, 20);
          } else {
             popup.style.display = 'block';
          }
       });
    });

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
 };

togglePopup();


const tabs = () => {

    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');


    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++){
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };      

          tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
            
            if(target.classList.contains('service-header-tab')){
                tab.forEach((item, i) => {
                    if (item === target){
                      toggleTabContent(i);
                    }
                });
            }
          } );




};

tabs();

// слайдер

const slider = () => {
   const slider = document.querySelector('.portfolio-content'),
         slide = document.querySelectorAll('.portfolio-item'),
         btn = document.querySelectorAll('.portfolio-btn'),
         ulDots = document.querySelector('.portfolio-dots');
   let dot = document.querySelectorAll('.dot');

   const renderItem = () => {
     for(let i = 0; i < slide.length; i++){
       let li = document.createElement('li');
       li.classList.add('dot');
       ulDots.appendChild(li);
     }
     dot = document.querySelectorAll('.dot');
     dot[0].classList.add('dot-active');
   };
   renderItem();

   let currentSlide = 0;
   let interval;

   const prevSlide = (elem, index, strClass) => {
     elem[index].classList.remove(strClass);
   };

   const nextSlide = (elem, index, strClass) => {
     elem[index].classList.add(strClass);
   };

   const autoPlaySlide = () => {

     prevSlide(slide, currentSlide, 'portfolio-item-active');
     prevSlide(dot, currentSlide, 'dot-active');

     currentSlide++;
     if(currentSlide >= slide.length){
       currentSlide = 0;
     }
     nextSlide(slide, currentSlide, 'portfolio-item-active');
     nextSlide(dot, currentSlide, 'dot-active');
   };

   const startSlide = (time = 3000) => {
     interval =setInterval(autoPlaySlide, time);
   };

   const stopSlide = () => {
     clearInterval(interval);
   };

   slider.addEventListener('click', (event) => {
     event.preventDefault();

     let target = event.target;

     if(!target.matches('.portfolio-btn, .dot')){
       return;
     }

     prevSlide(slide, currentSlide, 'portfolio-item-active');
     prevSlide(dot, currentSlide, 'dot-active');

     if(target.matches('#arrow-right')){
       currentSlide++;
     } else if(target.matches('#arrow-left')) {
       currentSlide--;
     } else if(target.matches('.dot')){
       dot.forEach((elem, index) => {
         if(elem === target){
           currentSlide = index;
         }
       })
     }

     if(currentSlide >= slide.length){
       currentSlide = 0;
     }

     if(currentSlide < 0){
       currentSlide = slide.length - 1;
     }

     nextSlide(slide, currentSlide, 'portfolio-item-active');
     nextSlide(dot, currentSlide, 'dot-active');

   });
   slider.addEventListener('mouseover', (event) => {
     if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
       stopSlide();
     }
   });
   slider.addEventListener('mouseout', (event) => {
     if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
       startSlide(1500);
     }
   });

   startSlide(1500);

 };

slider();


const commandPhoto = document.querySelectorAll('.command__photo');
  for (let i = 0; i < commandPhoto.length; i++){
    let src = commandPhoto[i].getAttribute('src');
    let data = commandPhoto[i].getAttribute('data-img');
    commandPhoto[i].addEventListener('mouseover', (elem) => {
      const target = elem.target.matches('img');
      if(target){
        commandPhoto[i].setAttribute('src', `${data}`);
      }
    });
    commandPhoto[i].addEventListener('mouseout', (elem) => {
      const target = elem.target.matches('img');
      if(target){
        commandPhoto[i].setAttribute('src', `${src}`);
      }
    });
  }

  const calcItem = document.getElementsByTagName('input[type = number]');
  for(let i = 0; i < calcItem.length; i++){
    calcItem[i].addEventListener('input', () => {
      calcItem[i].value = calcItem[i].value.replace(/[^0-9]/, '');
    });
  }

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0;
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if(calcCount.value > 1){
        countValue += (calcCount.value - 1) / 10;
      }

      if(calcDay.value && calcDay.value < 5){
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if(typeValue && squareValue){
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      if(target.matches('select') || target.matches('input')){
        countSum();
      }
    });
  };
  calc(100);

  const sendForm = () => {
    const errorMessage = 'Что то пошло не так...';
    const loadMessage = document.createElement('div');
    const successMessage = 'Спасибо! Мы с Вами свяжемся.';
    const form = document.getElementById('form1');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    
  form.forEach((item) => {
     
      item.addEventListener('input', (event) => {
        let target = event.target;
        if(target.placeholder === 'Ваше имя' || target.placeholder === 'Ваше сообщение') {
          if(target.value.replace(/^[а-яА-ЯёЁ\s]+/g, '')) {
            target.value = target.value.substring(0, target.value.length - 1);
          } else if(target.value.trim() === '') target.value = '';
          else return;
        } else if(target.placeholder === 'Номер телефона') { 
            if(target.value.length === 13  || target.value.slice(1).replace(/[\d]+/g, '')) {
              target.value = target.value.substring(0, target.value.length - 1);
            } else return;
          }
      });
    
    });


    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(loadMessage);
      form.appendChild(statusMessage);
      loadMessage.textContent = loadMessage.classList.add('spinning-square');
      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body);
    });

    
    const postData = () => {
      fetch('server.php')
          .then((response) => {
            if (response.status !== 200){
              statusMessage.textContent = errorMessage;
              form.removeChild(loadMessage);
              throw new Error('status network not 200.');
            }
            return(response.text());
          })
          .then((data) => {
            statusMessage.textContent = successMessage;
            form.removeChild(loadMessage);
            form.reset();
          })
          .catch((error) => console.log(error));
    };
  
  sendForm(); 

};

});