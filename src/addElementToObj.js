const addElementToObj = (formElement, obj) => {
	
	const popupCall = document.querySelector('.popup-call');
	const popupConsultation = document.querySelector('.popup-consultation');
	const classPopupCalculate = 'popup-calculate';
	
	if(popupCall.contains(formElement)  && popupCall.classList.contains(classPopupCalculate)){
		
		const inputCheckboxType = document.getElementById('myonoffswitch');
		const selectDiameterWellOne = document.getElementById('diameter-well-one');
		const selectRngsWellOne = document.getElementById('rings-well-one');
		const selectDiameterWellTwo = document.getElementById('diameter-well-two');
		const selectRngsWellTwo = document.getElementById('rings-well-two');
		const inputCheckboxBottom = document.getElementById('myonoffswitch-two');
		const inputCalcResult = document.getElementById('calc-result');
		
		obj['inputCheckboxType'] = !inputCheckboxType.checked;
		obj['selectDiameterWellOne'] = selectDiameterWellOne.value;
		obj['selectRngsWellOne'] = selectRngsWellOne.value;
		obj['selectDiameterWellTwo'] = selectDiameterWellTwo.value;
		obj['selectRngsWellTwo'] = selectRngsWellTwo.value;
		obj['inputCheckboxBottom'] = inputCheckboxBottom.checked;
		obj['inputCalcResult'] = inputCalcResult.value;
		
	}
	else if(popupConsultation.contains(formElement)){
		
		const consultationInput = document.getElementById('consultation-input');
		
		obj['consultationInput'] = consultationInput.value;
		
	}
	
};

export default addElementToObj;