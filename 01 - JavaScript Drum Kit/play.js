const PLAYING_CN = "playing";

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio === null) return;
  // console.dir(audio);
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add(PLAYING_CN);
}

function removePlaying(event) {
  this.classList.remove(PLAYING_CN);
}

window.addEventListener("keydown", playSound);
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removePlaying));
