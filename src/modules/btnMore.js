const btnMore = () => {
    
    const addSentenceBtn = document.querySelector('.add-sentence-btn');
    const parent = addSentenceBtn.parentElement;
    
    const removeClasses = ['hidden', 'visible-sm-block'];
    
    addSentenceBtn.addEventListener('click', () => {
    
        addSentenceBtn.style.display = 'none';
        
        removeClasses.forEach( (removeClass) => {
            
            const elementList = parent.querySelectorAll('.' + removeClass);
            
            elementList.forEach( (element) => {
                element.classList.remove(removeClass);
            });
            
        });
        
    });
    
  };

export default btnMore;