const $audioBar = get(".audio-bar");
const $playButton = get(".play-button");

$playButton.addEventListener("click", () => {
  $audioBar.classList.add("is-show");
});
