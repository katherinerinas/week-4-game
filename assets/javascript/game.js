//assign random number generator-computer

//find pictures of crystals-set them to the page

//assign each crystal an array and for loop that runs through the values 1-12

//set if then statements to where if the userscore =computerscore: alerts : you win!

//set it to where if players score > computerscore: player loses

//set a counter to keep track of the user's total score

 
  var crystalValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
  "11", "12"];

  for (var i = 0; i < crystalValue.length; i++){
  	
  
$("#crystala").on("click", function(){
	alert("The current value is" + crystalValue[i]);
	

});
}