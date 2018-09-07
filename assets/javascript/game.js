// this is a game that has 4 crystals.  Each Crystal will generate a random Number
// every crystal needs to have a random number 1-12
// a new random number will generate every time you win or lose
// when you click on any crystal it will add the previous result until it equals the random number
// if the number is greater than the random number we will decrement a loss
// if the number is equal too the random number then we will increment a win

let randomResult;
let wins;
let losses;

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
    $(".crystals").append(crystal);

}

$(".crystal").on('click', function () {
    let number = ($(this).attr("data-random"));
});