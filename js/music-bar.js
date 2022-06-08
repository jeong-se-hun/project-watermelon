const get = (target) => {
  return document.querySelector(target);
};

const getAll = function (target) {
  return document.querySelectorAll(target);
};

const $play = get(".audio-bar__control-play");

const keys = Array.from(getAll(".audio-bar__control-play"));
const soundsRoot = "/assets/sound/";
const musics = [
  { key: 32, sound: "thatthat.mp3" },
  { key: 32, sound: "thatthat.mp3" },
  { key: 32, sound: "thatthat.mp3" },
  { key: 32, sound: "thatthat.mp3" },
  { key: 32, sound: "thatthat.mp3" },
];

const onMouseUp = (e) => {
  const keycode = e.target.getAttribute("data-key");
  playSound(keycode);
};

const getAudioElement = (index) => {
  const audio = document.createElement("audio");
  audio.dataset.key = musics[index].key;
  audio.src = soundsRoot + musics[index].sound;
  return audio;
};

const playSound = (keycode) => {
  const $audio = get(`audio[data-key="${keycode}"]`);
  // const $key = get(`div[data-key="${keycode}"]`);
  if ($audio) {
    $audio.classList.add("playing");
    $audio.play();
  }
};

keys.forEach((key, index) => {
  const audio = getAudioElement(index);
  key.appendChild(audio);
  key.addEventListener("mouseup", onMouseUp);
  key.dataset.key = musics[index].key;
});
