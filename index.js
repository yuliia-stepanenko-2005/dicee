let randomNumber1;
let randomNumber2;

function playGame() {
    rollDices();
    checkWinner();
}

function rollDices() {
    randomNumber1 = Math.floor((Math.random() * 6));
    console.log(randomNumber1);

    let names = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];
    document.querySelector(".img1").setAttribute("src", names[randomNumber1]);
    //можна й так
    //document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    //а краще так
    //document.querySelector(".img1").setAttribute("src", `${ "images/dice" + randomNumber1 + ".png"}`);
    randomNumber2 = Math.floor((Math.random() * 6));
    console.log(randomNumber2);
    document.querySelector(".img2").setAttribute("src", names[randomNumber2]);
}

function checkWinner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
playGame();