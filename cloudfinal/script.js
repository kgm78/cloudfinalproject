var count = 0;
var increment = 1;
var plusFiveCost = 50;
var plusTenCost = 100;
var plusTwentyCost = 500;
//Increases count by 1
function increase(){
	count++;
	document.getElementById("score").innerHTML = count;
}


//Starts plusFive every second
function plusFiveLoopStart(){
	//Tests to see if player can afford it the subtracts from count
	if(count >= plusFiveCost){
		count = count - plusFiveCost;
		//Increase cost
		plusFiveCost = plusFiveCost + 0.2 * plusFiveCost;
		plusFiveCost = Math.trunc(plusFiveCost);
		document.getElementById("PlusFive").innerHTML = "Florida Man for " + plusFiveCost +  " points!";
		document.getElementById("score").innerHTML = count;
		var plusFiveCounter = setInterval(plusFive, 1000);
		document.getElementById("SuccessFailure").innerHTML = "Success!";

	}
	else{
		document.getElementById("SuccessFailure").innerHTML = "Failed: You do not have enough points!";

	}
}
//Starts plusTen every second
function plusTenLoopStart(){
	if(count >= plusTenCost){
		count = count - plusTenCost;
		//Increase cost
		plusTenCost = plusTenCost + 0.2 * plusTenCost;
		plusTenCost = Math.trunc(plusTenCost);
		document.getElementById("PlusTen").innerHTML = "Hunter for " + plusTenCost +  " points!";
		document.getElementById("score").innerHTML = count;
		var plusTenCounter = setInterval(plusTen, 1000);
		document.getElementById("SuccessFailure").innerHTML = "Success!";

	}
	else{
		document.getElementById("SuccessFailure").innerHTML = "Failed: You do not have enough points!";

	}
}
//Starts plusTwenty every second
function plusTwentyLoopStart(){
		if(count >= plusTwentyCost){
		count = count - plusTwentyCost;
		//Increase cost
		plusTwentyCost = plusTwentyCost + 0.2 * plusTwentyCost;
		plusTwentyCost = Math.trunc(plusTwentyCost);
		document.getElementById("PlusTwenty").innerHTML = "Lesquad for " + plusTwentyCost +  " points!";
		document.getElementById("score").innerHTML = count;
		var plusTwentyCounter = setInterval(plusTwenty, 1000);
		document.getElementById("SuccessFailure").innerHTML = "Bought";

	}
	else{
		document.getElementById("SuccessFailure").innerHTML = "Failed: You do not have enough points!";

	}
}

//Increases count by 5 every second
function plusFive(){
	count = count + 5;
	document.getElementById("score").innerHTML = count;
}
//Increases count by 10 every second
function plusTen(){
	count = count + 10;
	document.getElementById("score").innerHTML = count;
}
//Increases count by 20 every second
function plusTwenty(){
	count = count + 20;
	document.getElementById("score").innerHTML = count;
}

//Calls AWS API
async function callFloridaManDesc() {
	fetch( ' https://cm9pe1vti7.execute-api.us-east-1.amazonaws.com/prod', {
		method: 'GET'
			})
	.then(response => response.json())
	.then((response) =>{
		console.log(response);
		document.getElementById("PlusFive").innerHTML = response.body;
	});
}

async function callHunterDesc() {
	fetch( 'https://qhbdhgm9ia.execute-api.us-east-1.amazonaws.com/prod', {
		method: 'GET'
			})
	.then(response => response.json())
	.then((response) =>{
		console.log(response);
		document.getElementById("PlusTen").innerHTML = response.body;
	});
}

async function callSquadDesc() {
	fetch( 'https://0qxyfzuedk.execute-api.us-east-1.amazonaws.com/prod', {
		method: 'GET'
			})
	.then(response => response.json())
	.then((response) =>{
		console.log(response);
		document.getElementById("PlusTwenty").innerHTML = response.body;
	});
}