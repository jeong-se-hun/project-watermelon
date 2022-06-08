const get = (target) => {
  return document.querySelector(target);
};

const getAll = function (target) {
  return document.querySelectorAll(target);
};

const $audioBar = get(".audio-bar");
const $playButton = get(".play-button");
const $audio = get("#audio1");
const $audioBarProgress = get(".audio-bar__progress");
const $audioBarStartTime = get(".audio-bar__start-time");
const $audioBarControlPlay = get(".audio-bar__control-play");

let count = 0;
let bar;

const interval = () => {
  bar = setInterval(() => {
    count++;
    $audioBarProgress.style.width = `${count}%`;
  }, 1750);
};

const progressBar = (role) => {
  if (role === "start") interval();
  else if (role === "pause") {
    clearInterval(bar);
  }
};

$playButton.addEventListener("click", () => {
  $audio.play(); // 노래시작
  $audioBar.classList.add("is-show"); // 밑에 바 올라옴
  $audioBarProgress.classList.add("is-active"); // 프로그래스바 시작

  interval();
});

$audioBarControlPlay.addEventListener("click", () => {
  $audio.pause();
  $audioBarControlPlay.classList.toggle("is-pause");

  if (!$audioBarControlPlay.classList.contains("is-pause")) {
    $audio.play();
    progressBar("start");
  } else {
    progressBar("pause");
  }
});
