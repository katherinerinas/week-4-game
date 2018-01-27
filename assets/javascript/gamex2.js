$(document).ready(function(){

    //define variables
    var wins= 0
    var losses= 0
    var score =0


    //generate random number for computer, push to html
    var numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19);
    alert("The value that you want is:   "  +  numberGoal);

    $("#computernumber").text(numberGoal);





    var crystalValues = ["1", "5", "2", "7"];

    for (var i = 0; i<crystalValues.length; i++) {



     $(".crystal-image" + i+ "img").attr("data-crystalvalue",crystalValues[i]);

//setting values to each crystal

        
       
    };

       $(".crystal-image").on("click", function() {
  
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log(crystalValue);
        crystalValue = parseInt(crystalValue);
       

        score += crystalValue;
             console.log(score);
        //This is the counter # section: 

        $("#yourscore").text(score);

        if (score === numberGoal){
            alert("You win!");

        else if (score > numberGoal){
        	 alert("You Lose!");
         }
        }
    });
});
