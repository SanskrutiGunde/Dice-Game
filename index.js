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
  if (
    createjs.WebAudioPlugin.context &&
    createjs.WebAudioPlugin.context.state === "suspended"
  ) {
    createjs.WebAudioPlugin.context.resume();
  }
  // if initializeDefaultPlugins returns false, we cannot play sound in this browser
  if (!createjs.Sound.initializeDefaultPlugins()) {
    return;
  }
  createjs.Sound.registerSound("sound/DICE.wav", soundID);
}
function playSound() {
  createjs.Sound.play(soundID);
}

var resumeAudioContext = function () {
  // handler for fixing suspended audio context in Chrome
  try {
    if (
      createjs.WebAudioPlugin.context &&
      createjs.WebAudioPlugin.context.state === "suspended"
    ) {
      createjs.WebAudioPlugin.context.resume();
    }
  } catch (e) {
    // SoundJS context or web audio plugin may not exist
    console.error(
      "There was an error while trying to resume the SoundJS Web Audio context..."
    );
    console.error(e);
  }
  // Should only need to fire once
  window.removeEventListener("click", resumeAudioContext);
};
window.addEventListener("click", resumeAudioContext);

// window.onload = loadSound;
