function play() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var image1 = document.getElementsByClassName("img1")[0];
  var image2 = document.getElementsByClassName("img2")[0];
  image1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  var result = document.querySelector("h1");

  var p1 = document.querySelector(".p1");
  var p2 = document.querySelector(".p2");

  if (randomNumber1 > randomNumber2) {
    result.innerText = "🚩Player 1 Wins.";
    p1.innerText = "👑 Player 1";
    p2.innerText = "Player 2";
  } else if (randomNumber1 === randomNumber2) {
    result.innerText = "Draw.🤗";
    p1.innerText = "Player 1";
    p2.innerText = "Player 2";
  } else {
    result.innerText = "Player 2 Wins.🚩";
    p2.innerText = "👑 Player 2";
    p1.innerText = "Player 1";
  }
}
document.querySelector("button.playButton").onclick = function () {
  playSound();
  play();
};

// button sound
var soundID = "diceSound";
function loadSound() {
  createjs.Sound.registerSound("sound/DICE.wav", soundID);
}
function playSound() {
  createjs.Sound.play(soundID);
}

window.onload = loadSound;
