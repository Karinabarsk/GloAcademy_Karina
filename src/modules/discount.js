const discount = () => {

    const btnDisc = document.querySelectorAll('.sentence-btn');
  
  
  
    for (let buttonItem of btnDisc) {
      buttonItem.addEventListener('click', (event) => {
        const popupD = document.querySelector('.popup-discount');
        popupD.style.display = 'block';
  
        popupD.addEventListener('click', (event) => {
          let target = event.target;
   
          if (target.classList.contains('popup-close')) {
             popupD.style.display = 'none';
          } else {
             target = target.closest('.popup-content');
             if (!target) {
                popupD.style.display = 'none';
             }
          }
  
  
      });
    });
  }
  };

  export default discount;
