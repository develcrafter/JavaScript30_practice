const PLAYING_CN = "playing";

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio === null) {
    return;
  }
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add(PLAYING_CN);
}

window.addEventListener("keydown", playSound);

function transitionEnd(event) {
  //   if (event.propertyName !== "transform") {
  //     return;
  //   }

  this.classList.remove(PLAYING_CN);
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", transitionEnd));
