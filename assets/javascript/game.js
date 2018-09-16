// this is a game that has 4 crystals.  Each Crystal will generate a random Number
// every crystal needs to have a random number 1-12
// a new random number will generate every time you win or lose
// when you click on any crystal it will add the previous result until it equals the random number
// if the number is greater than the random number we will decrement a loss
// if the number is equal too the random number then we will increment a win

let randomResult;
let loss = 0;
let win = 0;
let previous = 0;

let resetAndStart = function () {

    $(".crystals").empty();

    let images = ["./assets/images/1starCrystal.png", "./assets/images/2crystal.png", "./assets/images/3crystal.png", "./assets/images/4crystal.png"];


    randomResult = Math.floor(Math.random() * 69) + 30;

    $("#result").html("Random Number:" + randomResult);

    for (i = 0; i < 4; i++) {

        let random = Math.floor(Math.random() * 11) + 1;

        let crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"

        })
        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();

// event Delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if (previous > randomResult) {

        loss++;

        $("#loss").html("You Lost:" + loss);

        previous = 0;

        resetAndStart();

    } else if (previous === randomResult) {
        win++;

        $("#win").html("You Win:" + win);

        previous = 0;

        resetAndStart();
    }

});