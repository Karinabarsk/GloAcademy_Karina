const popup = () => {

   const btn = document.querySelectorAll('.call-btn');

   for (let buttonIm of btn) {
     buttonIm.addEventListener('click', (event) => {
       const popupCall = document.querySelector('.popup-call');
       popupCall.style.display = 'block';
       event.preventDefault();
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


export default popup;
