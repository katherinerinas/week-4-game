


//computer random number
//
//assign each crystal an array and for loop that runs through the values 1-12:
// (trouble getting the loops to work) {random numbers, four random numbers btween 1/12
	//wins, losses, total score: 
//figure out what crystal was clicked and store in variable
//store crystal value in variable crystalclickedvalue

//add crystal clicked value to total score


//set if then statements to where if the userscore =computerscore: alerts : you win!

//set it to where if players score > computerscore: player loses

//set a counter to keep track of the user's total score

//reset game without having to reset entire page
//(reset wins, losses, and total score to 0)

//reset computer random number, reset. crystal array
//update page to put in new wins, random number, user total score

//if win, same thing, but add 1 to losses


//put wins on page
//put losses on page
//put computerRandomNumberon page
//put userTotalScore on page


//var computerRandomNumber;

//reset function

//reset();


$(document).ready(function(){

var counter = 0
var wins= 0
var losses= 0
var Totalwins= 0


var numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19);
      alert("The value that you want is:   "  +  numberGoal);

      $("#computernumber").text(numberGoal);

 
 });

 var crystalValues = [9, 5, 2, 7];

for (var i = 0; i<crystalValues.length; i++) {
	



$("#crystala").on("click", function() {
	alert (crystalValues[i]);
})

};