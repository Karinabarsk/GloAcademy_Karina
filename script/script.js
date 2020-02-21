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

countTimer('23 february 2020');
//setInterval(countTimer, 1000, '30 february 2020');

// menu

const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
           menu = document.querySelector('menu'),
           closeBtn = document.querySelector('.close-btn'),
           menuItems = menu.querySelectorAll('ul>li');

          let count = 0;

          const slideMenu = () => {
              count++;
              menu.style.left = count*4 + 'px';
              if(count<230) {
                  setTimeout(slideMenu, 10);
              }
              if(screen.width > 768) {
                  btnMenu.style = 'none';
              }
          };

          const handlerMenu = () => {
           menu.classList.toggle('active-menu');
           };
                

        btnMenu.addEventListener('click', handlerMenu, slideMenu());
        closeBtn.addEventListener('click', handlerMenu); 
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};
toggleMenu();

const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
};

togglePopup();

});
