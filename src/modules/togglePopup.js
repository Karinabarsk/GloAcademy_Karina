const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach((elem) => {
       elem.addEventListener('click', () => {

          const popupContent = document.querySelector('.popup-content');

          if (window.innerWidth > 768) {
             popup.style.display = 'block';
             popupContent.style.top = '0%';
             let count = 0;
             let endPosition = 20;
             let speed = 1;
             const activePopup = () => {
               popupContent.style.top = count + '%';
               count = count + speed;
               if(count < endPosition){
                  requestAnimationFrame(activePopup);
               }
             };
             requestAnimationFrame(activePopup);
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

 export default togglePopup;
