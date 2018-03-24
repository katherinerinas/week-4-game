$(document).ready(function(){

    
    var wins= 0
    var losses= 0
    var score =0


    var numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19);
    alert("The value that you want is:   "  +  numberGoal);

    $("#computernumber").text(numberGoal);





    var crystalValues = [4, 5, 8, 7];

    for (var i = 0; i<crystalValues.length; i++) {



    $("#crystal0").attr("data-crystalvalue", crystalValues[0]);
    $("#crystal1").attr("data-crystalvalue", crystalValues[1]);
    $("#crystal2").attr("data-crystalvalue", crystalValues[2]);
    $("#crystal3").attr("data-crystalvalue", crystalValues[3]);



        
       
    };

       
        var crystalValue = $(this).attr("data-crystalvalue");
        console.log(crystalValue);
        crystalValue = parseInt(crystalValues);
        $("#crystala").on("click", function(crystalValue){

        });
        // $("#crystalbee").on("click", function(crystalValue){

        // });
        // $("#crystalc").on("click", function(crystalValue){

        // });
        // $("#crystald").on("click", function(crystalValue){

        // });
        

        score = score + crystalValue;
             console.log(score);
      

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

        
        


