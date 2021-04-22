function play() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var image1 = document.getElementsByClassName("img1")[0];
  var image2 = document.getElementsByClassName("img2")[0];
  image1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  image2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  var result = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    result.innerText = "🚩Player 1 Wins.";
  } else if (randomNumber1 === randomNumber2) {
    result.innerText = "Draw.🤗";
  } else {
    result.innerText = "Player 2 Wins.🚩";
  }
}
document.querySelector("button.playButton").onclick = function () {
  play();
};

play();
