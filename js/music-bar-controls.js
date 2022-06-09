const $audioBar = get(".audio-bar");
const $playButton = get(".play-button");
const $audio = get("#audio1");
const $audioBarProgress = get(".audio-bar__progress");
const $audioBarStartTime = get(".audio-bar__start-time");
const $audioBarControlPlay = get(".audio-bar__control-play");
const $appendMinutes = get("#minutes");
const $appendSeconds = get("#seconds");

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

  clearInterval(playInterval);
  playInterval = setInterval(startTimer, 1000);

  interval();
});

$audioBarControlPlay.addEventListener("click", () => {
  $audio.pause();
  $audioBarControlPlay.classList.toggle("is-pause");

  if (!$audioBarControlPlay.classList.contains("is-pause")) {
    $audio.play();
    progressBar("start");
    clearInterval(playInterval);
    playInterval = setInterval(startTimer, 1000);
  } else {
    progressBar("pause");
    clearInterval(playInterval);
  }
});

// 재생 시간
let playInterval;
let minutes = 00;
let seconds = 00;

function startTimer() {
  seconds++;

  if (seconds < 9) {
    $appendSeconds.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    $appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    console.log("minutes");
    minutes++;
    $appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    $appendSeconds.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    $appendMinutes.innerHTML = minutes;
  }

  if (minutes === 2 && seconds === 56) {
    clearInterval(playInterval);
    minutes = "00";
    seconds = "00";
    $appendMinutes.innerHTML = minutes;
    $appendSeconds.innerHTML = seconds;
  }
}
