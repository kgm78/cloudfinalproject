// JavaScript Document
var count = 0;
var increment = 1;
var plusFiveCost = 50;
var plusTenCost = 100;
var plusTwentyCost = 500;
var plusFiftyCost = 1000;
var plusHundredCost= 10000;
//Increases count by 1
function increase(){
	count = count + increment;
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
//Increases count by 5 every second
function plusFive(){
	count = count +5;
	document.getElementById("score").innerHTML = count;
}
//Increases count by 10 every second
function plusTen(){
	count = count +10;
	document.getElementById("score").innerHTML = count;
}