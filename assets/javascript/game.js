// this is a game that has 4 crystals.  Each Crystal will generate a random Number
// every crystal needs to have a random number 1-12
// a new random number will generate every time you win or lose
// when you click on any crystal it will add the previous result until it equals the random number
// if the number is greater than the random number we will decrement a loss
// if the number is equal too the random number then we will increment a win

let randomResult;
let wins = 0;
let losses = 0;
let previous = 0;

let resetAndStart = function () {

    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 69) + 30;

    $("#result").html("Random Result:" + randomResult);
    for (i = 0; i < 4; i++) {

        let random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);

        let crystal = $("<div>")
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);

        $(".crystals").append(crystal);
    }

}

resetAndStart();



// event Delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    console.log(previous);

    if (previous > randomResult) {
        loss--;

        $("#loss").html("loss");

        previous = 0;

        resetAndStart();

    } else if (previous === randomResult) {
        win++;
        $("#win").html("win");

        previous = 0;
        resetAndStart();
    }

});