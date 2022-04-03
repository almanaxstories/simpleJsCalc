	
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


resultButton.addEventListener("click", giveMeResult);


function giveMeResult(){

	checkForUniqueElements();

	let valueOneIsANumber = isValueANumber(inputFirst.value);
	
	if(!valueOneIsANumber){
		let errorDiv1 = document.createElement("div");
		errorDiv1.setAttribute("style", "text-align:center; color:red;");
		errorDiv1.setAttribute("id", "error1");
		errorDiv1.setAttribute("class", "error-message");
		errorDiv1.textContent = "Value is not a number";
		mainFirstDiv.appendChild(errorDiv1);
	}
	
	let valueTwoIsANumber = isValueANumber(inputSecond.value);

	if(!valueTwoIsANumber){
		let errorDiv2 = document.createElement("div");
		errorDiv2.setAttribute("style", "text-align:center; color:red;");
		errorDiv2.setAttribute("id", "error2");
		errorDiv2.setAttribute("class", "error-message");
		errorDiv2.textContent = "Value is not a number";
		mainSecondDiv.appendChild(errorDiv2);
	}
	
	if(inputFirst.value.length === 0 && inputSecond.value.length === 0){
		let resultMessage = document.createElement("div");
		resultMessage.setAttribute("id", "empty-form-error");
		resultMessage.setAttribute("style", "text-align:center; margin-top:10%; color:orange;");
		resultMessage.textContent = "Please fill the input forms";
		calculatorForm.appendChild(resultMessage);
		return undefined;
	}

	if(valueOneIsANumber && valueTwoIsANumber){
		let resultMessage = document.createElement("div");
		resultMessage.setAttribute("id", "result");
		resultMessage.setAttribute("style", "text-align:center; margin-top:10%; color:blue;");
		resultMessage.textContent = parseFloat(inputFirst.value) + parseFloat(inputSecond.value);
		calculatorForm.appendChild(resultMessage);
	}

	function isValueANumber(inputString){

		for(let g in inputString){
			if((inputString.charCodeAt(g) >= 48 && inputString.charCodeAt(g) <= 57)
			 || (inputString.charCodeAt(g) === 46) || (inputString.charCodeAt(g) === 45)
			  || (inputString.charCodeAt(g) === 43)){
				continue;
			}else{
				return false;
			}
			  
		}
		return true; 
	}


	function checkForUniqueElements(){

		let isTheResultDivAlreadyExist = document.getElementById("result");

		if(isTheResultDivAlreadyExist){
		isTheResultDivAlreadyExist.remove();
		}

		let isTheFirstErrorDivExist = document.getElementById("error1");

		if(isTheFirstErrorDivExist){
			isTheFirstErrorDivExist.remove();
		}

		let isTheSecondErrorDivExist = document.getElementById("error2");

		if(isTheSecondErrorDivExist){
			isTheSecondErrorDivExist.remove();
		}

		let isTheInputFormsErrorDivExist = document.getElementById("empty-form-error");

		if(isTheInputFormsErrorDivExist){
			isTheInputFormsErrorDivExist.remove();
		}
	}
}	
};

