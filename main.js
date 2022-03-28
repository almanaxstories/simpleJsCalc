/*let button = document.getElementById("res");
	res.addEventListener("click", mainFunc());*/

function mainFunc(){
	let v1 = document.getElementById("valFirst");
	let v2 = document.getElementById("valSecond");
	let p1 = document.getElementById("parFirst");
	let p2 = document.getElementById("parSecond");
	let pr = document.getElementById("parResult");
	
	let v1Val = parseInt(v1.value);
	let test112 = NaN;
	
	if(isNaN(v1Val)){
		p1.innerHTML = "touchdown";
	}
	p1.innerHTML = "out";
	
}




/*
if(parseInt(vl.value) === NaN ){
		var err = document.createElement("div");
		err.id = "err-1";
		err.className = "error-message";
		err.innerHTML = "!WRONG INPUT!";
		p1.appendChild(err);
		
	}
	*/