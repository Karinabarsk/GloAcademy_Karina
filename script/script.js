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

countTimer('28 february 2020');
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


});
