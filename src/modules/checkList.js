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

  export default checkList;