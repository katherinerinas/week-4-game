
$(document).ready(function() {
  
  var yourNumber = 0;

  var randomNum = randomNumGen();
  var wins = 0;
  var losses = 0;
  var crystals;
 
  function randomNumCrystals() {
   
    return {
      crystala: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/crystalc.jpg"
      },
      crystalbee: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/crystald.jpg"
      },
      crystalc: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/crystalc.jpg"
      },
      crystald: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/crystald.jpg"
      }
    };
  }
 
  function randomNumGen() {
    return Math.floor(Math.random() * 102) + 19;
  }
  
  function setGame() {
    
    yourNumber = 0;
    
    crystals = randomNumCrystals();
   
    randomNum = randomNumGen();
    $("#computerNumber").text(randomNum);
    $("#winKeeper").empty();
 
  }
  
  function updateDom(didUserWin) {
    $("#winKeeper").empty();
    
    if (didUserWin === true) {
     
      $("#winKeeper").append($("<p>").text("Huzzah!"));
      setGame();
      renderMatchingNumber();
    }
    else if (didUserWin === false) {
    
      $("#winKeeper").append($("<p>").text("Game Over :("));
      setGame();
      renderMatchingNumber();
    }
   
    var wSpan = $("<span>").text(wins);
    var lSpan = $("<span>").text(losses);
    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");
    pWins.append(wSpan);
    pLosses.append(lSpan);
    $("#winKeeper").append(pWins);
    $("#winKeeper").append(pLosses);
  }
 
  function renderCrystals() {
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
      crystalDiv.append(crystalImg);
      $("#crystals-here").append(crystalDiv);
    }
  }
  
  function updateMatchingNumber(crystal) {
    
    yourNumber += crystals[crystal.attr("data-name")].points;

  }
  
  function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'><br>").text(yourNumber);
    $("#yourScore").html();
    $("#yourScore").html(scoreNumDiv);
  }
 
   setGame();
   updateDom();
   renderCrystals();
   renderMatchingNumber();
  
  $(".crystals-button").on("click", function(event) {
      updateMatchingNumber($(this));
      renderMatchingNumber();
   
    if (yourNumber === randomNum) {
       wins++;
       setGame();
       updateDom(true);
    }
    
    else if (yourNumber > randomNum) {

         losses++;
         setGame();
         updateDom(false);
      }
   });
});
     

    




