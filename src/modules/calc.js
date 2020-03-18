const calc = () => {
    
    const inputCheckboxType = document.getElementById('myonoffswitch');
    const selectDiameterWellOne = document.getElementById('diameter-well-one');
    const selectRngsWellOne = document.getElementById('rings-well-one');
    const selectDiameterWellTwo = document.getElementById('diameter-well-two');
    const selectRngsWellTwo = document.getElementById('rings-well-two');
    const inputCheckboxBottom = document.getElementById('myonoffswitch-two');
    const inputCalcResult = document.getElementById('calc-result');
    
    let cost = 0;
    
    if(inputCheckboxType.checked){
        cost = 10000;
    }
    else{
        cost = 15000;
    }
    
    if(selectDiameterWellOne.selectedIndex === 1){
        cost += cost * 0.2;
    }
    
    if((!inputCheckboxType.checked) && selectDiameterWellTwo.selectedIndex === 1){
        cost += cost * 0.2;
    }
    
    if(selectRngsWellOne.selectedIndex === 1){
        cost += cost * 0.3;
    }
    else if(selectRngsWellOne.selectedIndex === 2){
        cost += cost * 0.5;
    }
    
    if(!inputCheckboxType.checked){
        
        if(selectRngsWellTwo.selectedIndex === 1){
            cost += cost * 0.3;
        }
        else if(selectRngsWellTwo.selectedIndex === 2){
            cost += cost * 0.5;
        }
        
    }
    
    if(inputCheckboxBottom.checked){
        
        if(inputCheckboxType.checked){
            cost += 1000;
        }
        else{
            cost += 2000;
        }
        
    }
    
    inputCalcResult.value = String(cost);
    
  };
  
  
  const addListenerForСalculateCost = () => {
    
    const runСalculatElementIdList = [
        'myonoffswitch',
        'diameter-well-one',
        'rings-well-one',
        'diameter-well-two',
        'rings-well-two',
        'myonoffswitch-two',
        'distance-to-house'
    ];
  
  const calculateBtn = document.getElementById('calculate-btn');
    
    const listenerRunСalculate = (event) => {
        
        calculateCost();
        
    };
    
    runСalculatElementIdList.forEach( (elementId) => {
        
        const element = document.getElementById(elementId);
        
        element.addEventListener('input', calculateCost);
        
    });
  
  calculateBtn.addEventListener('click', calculateCost);
    
  };

  export default calc;