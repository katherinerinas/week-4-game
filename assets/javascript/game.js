


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

// On Page Load:
        // Create variables (and set them to default values):
	    	// computerRandomNumber
			// array of crystals values
	        // wins = 0
	        // losses = 0
	        // userTotalScore
        // Call reset function
		// Call update items on the page function
    // On crystal click:
        // Figure out what crystal they clicked and store in a variable
        // Store crystal value in variable (crystalClickedValue)
        // Add crystalClickedValue to userTotalScore
        // Call update items on the page function
        // if they win (userTotalScore === computerRandomNumber)
            // Add 1 to wins
            // Call reset function
			// Call update items on the page function
        // if they lose (userTotalScore > computerRandomNumber)
			// Add 1 to losses
			// Call reset function
			// Call update items on the page function
    // Update items on the page (function):
        // Put wins on page
        // Put losses on page
        // Put computerRandomNumber on page
        // Put userTotalScore on page
	// Reset (function):
		// userTotalScore = 0
        // computerRandomNumber = new random number between 19 and 120
        // array of crystals values (new random numbers between 1 and 12)


$(document).ready(function(){

//define variables
     
     var wins= 0
     var losses= 0
     var score =0


    //generate random number for computer, push to html
    var numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19);
    alert("The value that you want is:   "  +  numberGoal);

    $("#computernumber").text(numberGoal);

   

        var crystalValuea = ["1", "5", "2", "7"];

        for (var i = 0; i<crystalValuea.length; i++) {


         $("#crystala").on("click", function(){ 
         score = score + parseInt(crystalValuea[i]);  

     

         $("#yourscore").text(score);

      });

     }


     var crystalValueb = ["9", "5", "2", "7"];

    for (var i = 0; i<crystalValueb.length; i++) {


       $("#crystalb").on("click", function(){ 
        score= score +  parseInt(crystalValueb[i]);  


    });

    }   

     var crystalValuec = ["8", "6", "2", "7"];

    for (var i = 0; i<crystalValuec.length; i++) {

       $("#crystalc").on("click", function(){ 
        score= score + parseInt(crystalValuec[i]);  

    //document.write(crystalvaluec)

    });

}
     var crystalValued = ["9", "4", "3", "2"];

    for (var i = 0; i<crystalValued.length; i++) {

    }

});
 //  $("#crystald").on("click", function(){ 
   // counter + crystalValued[i];  
//});
//}

 

//This is the counter # section: 
   
  
    //$("#yourscore").text(score);

    //if (score === numberGoal){
      //alert("You win!");
    
 //else if(counter >= numberGoal){

 //}



     

    




