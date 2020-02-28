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
//setInterval(countTimer, 1000, '30 february 2020');

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

  const calcItem = document.querySelectorAll('.calc-item');
  for(let i = 0; i < calcItem.length; i++){
    calcItem[i].addEventListener('input', () => {
      calcItem[i].value = calcItem[i].value.replace(/[^0-9]/, '');
    });
  }

});