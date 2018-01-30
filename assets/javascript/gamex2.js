$(document).ready(function(){

    //define variables
    var wins= 0
    var losses= 0
    var score =0


    //generate random number for computer, push to html
    var numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19);
    alert("The value that you want is:   "  +  numberGoal);

    $("#computernumber").text(numberGoal);





    var crystalValues = [4, 5, 8, 7];

    for (var i = 0; i<crystalValues.length; i++) {



     $(".crystal-image" + i+ "img").attr("data-crystalvalue",crystalValues[i]);

//setting values to each crystal

        
       
    };

       
  
        var crystalValue = ($(this).attr("data-crystalvalue"));
        console.log(crystalValue);
        crystalValue = parseInt(crystalValues);
        $(".crystal-image").on("click", function(crystalValue){

        });

        

        score += crystalValue;
             console.log(score);
        //This is the counter # section: 

        $("#yourscore").text(score);

        if (score === numberGoal){
            alert("You win!");
            wins ++;
            score ++;
        }
        else if(score > numberGoal){
        	 alert("You Lose!");
             losses ++;
             score--;
         }
        
    });

