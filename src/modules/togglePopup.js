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

 export default togglePopup;
