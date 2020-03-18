const createBlock = () => {
    
    const offswitch = document.getElementById('myonoffswitch');
    const onoffswitchLabel = document.querySelector('.onoffswitch-label');
    
    const hiddenElementIdList = [
        'title-well-two',
        'select-one-well-two',
        'select-two-well-two'
    ];
    
    const hiddenClass = 'hidden';
    
    const listenerCheckbox = (event) => {
        
        hiddenElementIdList.forEach( (elementId) => {
            
            const element = document.getElementById(elementId);
            
            if(offswitch.checked){
                element.classList.remove(hiddenClass);
            }
            else{
                element.classList.add(hiddenClass);
            }
            
        });
        
    };
    
    offswitch.checked = false;
    
    onoffswitchLabel.addEventListener('click', listenerCheckbox);
    
  };

  export default createBlock;