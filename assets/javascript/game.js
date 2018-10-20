// There are four crystals displayed as buttons, each has a random hidden value between 1-12

// There is a random number between 19-120 shown at the beginning 

// When the player clicks on a crystal, it will add a hidden point to the players total point

// The player wins if the total score equals the ramdon number displayed at the beginnig of the game

// The player losses if the total number goes beyond the random number

// The game generates a new random number and total score is set to 0




// Global variables declared so that we can use them in every scope when required

// Player wins counter
var wins = 0;
// Player losses counter
var losses = 0;
// Player's score counter
var addCrysNum = 0;
// Random number between 19-120 generated at the beginning
var randomNum = Math.floor(Math.random() * (120-19+1))+19;
// This is to check in the browser console if the above line is functioning correctly
console.log("Random number: " + randomNum);



// This function resets the game after player's win or loss
function resetGame() {
    console.log("reset")

    // Here we generate a new random number again between 19 and 120
    randomNum = Math.floor(Math.random() * (120-19+1))+19;
    // We check in the browser console if new random number is generated
    console.log("New Random number: " + randomNum);

    /* Here we use jQuery to select the div with class ".random_number" 
       and dump the randomNum variable into our div */
    $(".random_number").html("Random Number: " + randomNum);
    
    // We set the player's score to 0 again
    addCrysNum = 0;
    $("#score").html("Your total score is: " + addCrysNum);


}

// Starting the jQuery event to manipulate the DOM when loaded
$(document).ready(function(){


// Trying a little bit of css with jQuery
$(".container").css("margin","10px 10px 10px 10px");
$("img").css("border","5px blue solid")

/* Here we use jQuery to select the div with class ".random_number" 
    and dump the randomNum variable into our div */
$(".random_number").html("Random Number: " + randomNum);

/* Here we use jQuery to select the div with id "#wins"  
    and dump the wins variable into our div */
$("#wins").html("Wins: " + wins);

/* Here we use jQuery to select the div with id "#losses"  
    and dump the losses variable into our div */
$("#losses").html("Losses: " + losses);

/* Here we use jQuery to select the div with id "#score"  
    and dump the addCrysNum variable into our div */
$("#score").html("Your total score is: " + addCrysNum);



/* Starting a jQuery function to trigger an event when the div with
   id "#crystals" are clicked */
    $("#crystals").on('click', function () {

        // The variable crysNum generates a random number between 1 and 12
        var crysNum = Math.floor(Math.random() * (12-1+1))+1;
        // We check in the browser console if new random number is generated
        console.log("Crystal random number: " + crysNum);

        // Here we add the player score with the randomly generated number
        addCrysNum += crysNum;
        // We check in the browser console if player score is updated
        console.log("Addition of the crystal numbers generated: " + addCrysNum);

        /* Here we use jQuery to select the div with id "#score"  
        and dump the updated addCrysNum variable into our div */
        $("#score").html("Your total score is: " + addCrysNum);
        
        // We check if there is a match between player's score and random number generated
        if(addCrysNum === randomNum) {
             // Here we check the win in the console
            console.log("won")
            // Then we update/increment wins by 1
            wins++;
            /* And we use jQuery to select the div with id "#wins"  
            and dump the updates/incremented wins variable into our div */
            $("#wins").html("Wins: " + wins);

            
            // We reset the game by calling the reset function
            resetGame();
        }

        // We check if player's score goes beyond the random number generated
        if(addCrysNum > randomNum) {
            // Here we check the loss in the console
            console.log("lost")
            // Then we update/increment losses by 1
            losses++;

            /* And we use jQuery to select the div with id "#losses"  
            and dump the updates/incremented losses variable into our div */
            $("#losses").html("Losses: " + losses);

            // We reset the game by calling the reset function
            resetGame();
        }

    });

    

    

    






});