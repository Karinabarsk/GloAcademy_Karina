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

export default popup;
