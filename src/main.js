import _ from 'lodash';

window.onload = () => {	
let calculatorForm = document.createElement("form");
calculatorForm.id = "formForCalc";
calculatorForm.setAttribute("style", "width:250px;  height:300px; border:2px solid blue; margin-top: 25%; margin-left: 40%;");
document.body.appendChild(calculatorForm);

let mainFirstDiv = document.createElement("div");
mainFirstDiv.id = "mainDiv1";
calculatorForm.appendChild(mainFirstDiv);

let inputFirst = document.createElement("input");
inputFirst.setAttribute("id", "input1");
inputFirst.setAttribute("type", "text");
inputFirst.setAttribute("style", "margin-left:9%; width:200px; margin-top:4%;");
mainFirstDiv.appendChild(inputFirst);

let mainSecondDiv = document.createElement("div");
mainSecondDiv.id = "mainDiv2";
calculatorForm.appendChild(mainSecondDiv);

let inputSecond = document.createElement("input");
inputSecond .setAttribute("id", "input2");
inputSecond.setAttribute("type", "text");
inputSecond.setAttribute("style", "margin-left:9%; width:200px; margin-top:20%;");
mainSecondDiv.appendChild(inputSecond);

let resultButton = document.createElement("input");
resultButton.setAttribute("type", "button");
resultButton.setAttribute("id", "resButton");
resultButton.setAttribute("style", "margin-top:20%; margin-left:28%; width:100px; height:25px;");
resultButton.setAttribute("value", "RESULT");
calculatorForm.appendChild(resultButton);


resultButton.addEventListener("click", addTwoNumbers);


function addTwoNumbers(){

	checkIfOutputMessagesDivsPresentOnPage();

	let firstValueIsCorrect = true, secondValueIsCorrect = true,
	parsedFirstInputValue,	parsedSecondInputValue;

	try{
		parsedFirstInputValue = new Decimal(inputFirst.value);
	}
	catch(err){
		let errorDiv1 = document.createElement("div");
		errorDiv1.setAttribute("style", "text-align:center; color:red;");
		errorDiv1.setAttribute("id", "error1");
		errorDiv1.setAttribute("class", "error-message");
		errorDiv1.textContent = "Value is not a number";
		mainFirstDiv.appendChild(errorDiv1);
		firstValueIsCorrect = false;
	}

	try{
		parsedSecondInputValue = new Decimal(inputSecond.value);
	}
	catch(err){
		let errorDiv2 = document.createElement("div");
		errorDiv2.setAttribute("style", "text-align:center; color:red;");
		errorDiv2.setAttribute("id", "error2");
		errorDiv2.setAttribute("class", "error-message");
		errorDiv2.textContent = "Value is not a number";
		mainSecondDiv.appendChild(errorDiv2);
		secondValueIsCorrect = false;
	}

	checkInputsForNaNAndInfinity();

	if(!firstValueIsCorrect || !secondValueIsCorrect){
		return undefined;
	}

	if(firstValueIsCorrect && secondValueIsCorrect){	
		let resultMessage = document.createElement("div");
		resultMessage.setAttribute("id", "result");
		resultMessage.setAttribute("style", "text-align:center; margin-top:10%; color:blue;");
		resultMessage.textContent = parsedFirstInputValue.plus(parsedSecondInputValue);
		calculatorForm.appendChild(resultMessage);
	}
	

	function checkIfOutputMessagesDivsPresentOnPage(){

		let isTheResultDivAlreadyPresent = document.getElementById("result");

		if(isTheResultDivAlreadyPresent){
			isTheResultDivAlreadyPresent.remove();
		}

		let isTheFirstErrorDivPresent = document.getElementById("error1");

		if(isTheFirstErrorDivPresent){
			isTheFirstErrorDivPresent.remove();
		}

		let isTheSecondErrorDivPresent = document.getElementById("error2");

		if(isTheSecondErrorDivPresent){
			isTheSecondErrorDivPresent.remove();
		}
	}

	function checkInputsForNaNAndInfinity(){
		if(!firstValueIsCorrect){
			//NOOP
		}else if(firstValueIsCorrect){
			if(isNaN(parsedFirstInputValue) || !isFinite(parsedFirstInputValue)){
				let errorDiv1 = document.createElement("div");
				errorDiv1.setAttribute("style", "text-align:center; color:red;");
				errorDiv1.setAttribute("id", "error1");
				errorDiv1.setAttribute("class", "error-message");
				errorDiv1.textContent = "Value is not a number";
				mainFirstDiv.appendChild(errorDiv1);
				firstValueIsCorrect = false;
		}
		}

		if(!secondValueIsCorrect){
			//NOOP
		}else if(secondValueIsCorrect){
			if(isNaN(parsedSecondInputValue) || !isFinite(parsedSecondInputValue)){
				let errorDiv2 = document.createElement("div");
				errorDiv2.setAttribute("style", "text-align:center; color:red;");
				errorDiv2.setAttribute("id", "error2");
				errorDiv2.setAttribute("class", "error-message");
				errorDiv2.textContent = "Value is not a number";
				mainSecondDiv.appendChild(errorDiv2);
				secondValueIsCorrect = false;
		}
	}
	}
}	
};

