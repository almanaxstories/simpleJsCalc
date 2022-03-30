	
window.onload = () => {	
let calculatorForm = document.createElement("form");
calculatorForm.id = "formForCalc";
calculatorForm.setAttribute("style", "width:250px;  height:250px; border:2px solid blue; margin-top: 25%; margin-left: 40%;");
document.body.appendChild(calculatorForm);

let inputFirst = document.createElement("input");
inputFirst.setAttribute("id", "input1");
inputFirst.setAttribute("type", "text");
inputFirst.setAttribute("style", "margin-left:9%; width:200px; margin-top:4%;");
calculatorForm.appendChild(inputFirst);

let errorDiv1 = document.createElement("div");
errorDiv1.setAttribute("id", "error1");
errorDiv1.setAttribute("class", "error-message");
calculatorForm.appendChild(errorDiv1);


let inputSecond = document.createElement("input");
inputSecond .setAttribute("id", "input2");
inputSecond.setAttribute("type", "text");
inputSecond.setAttribute("style", "margin-left:9%; width:200px; margin-top:20%;");
calculatorForm.appendChild(inputSecond);

let errorDiv2 = document.createElement("div");
errorDiv2.setAttribute("id", "error2");
errorDiv2.setAttribute("class", "error-message");
calculatorForm.appendChild(errorDiv2);

let resultButton = document.createElement("input");
resultButton.setAttribute("type", "button");
resultButton.setAttribute("id", "resButton");
resultButton.setAttribute("style", "margin-top:20%; margin-left:28%; width:100px; height:25px;");
resultButton.setAttribute("value", "RESULT");
calculatorForm.appendChild(resultButton);


resultButton.addEventListener("click", giveMeResult());

	
function giveMeResult(){
	let checkUniqueEl = document.getElementById("result");
	if(checkUniqueEl){
		checkUniqueEl.remove();
	}

	if(Number.isNaN(parseFloat(inputFirst.value))){
		errorDiv1.innerHTML = "Value is not a number";
	}
	if(Number.isNaN(parseFloat(inputSecond.value))){
		errorDiv2.innerHTML = "Value is not a number";
	}
	
	
	let resultMessage = document.createElement("div");
	resultMessage.setAttribute("id", "result");
	resultMessage.innerHTML = parseFloat(inputFirst.value) + parseFloat(inputSecond.value);
	resultMessage.innerHTML = result;
	calculatorForm.appendChild(resultMessage);
	
}	
};

