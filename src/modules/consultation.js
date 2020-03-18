const consultation = () => {

    const btnCons = document.querySelector('.consultation-btn');
  
    btnCons.addEventListener('click', () => {
      const popCons = document.querySelector('.popup-consultation')
  
      popCons.style.display = 'block';
  
      popCons.addEventListener('click', (event) => {
        let target = event.target;
  
        if (target.classList.contains('popup-close')) {
           popCons.style.display = 'none';
        } else {
           target = target.closest('.popup-content');
           if (!target) {
              popCons.style.display = 'none';
           }
        }
  
     });
  
    });
  
  };

  export default consultation;