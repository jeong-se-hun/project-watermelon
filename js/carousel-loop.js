const carouselLoop = () => {
  const $indicator = document.querySelectorAll(
    ...[".home__artist__control__indicator"]
  );
  const $artistWrap = get(".home__artist");
  const $artistList = get(".home__artist__list");
  const $artistItems = document.querySelectorAll(".home__artist__item");

  const size = $artistWrap.clientWidth;
  let slideCount = $artistItems.length;
  let currentIdx = 0;
  let prevIdx = 0;

  makeClone();

  function makeClone() {
    for (let i = 0; i < slideCount; i++) {
      let cloneSlide = $artistItems[i].cloneNode(true);
      cloneSlide.classList.add("clone");
      $artistList.append(cloneSlide);
    }
    for (let i = slideCount - 1; i >= 0; i--) {
      let cloneSlide = $artistItems[i].cloneNode(true);
      cloneSlide.classList.add("clone");
      $artistList.prepend(cloneSlide);
    }

    updateWidth();
    setPosition();
    setTimeout(function () {
      $artistList.style.left = "0px";
      $artistList.style.transition = "0.5s ease-out";
    }, 100);
  }

  function updateWidth() {
    let currentSlides = document.querySelectorAll(".home__artist__item");
    let newSlideCount = currentSlides.length;
    const newWidth = size * newSlideCount + "px";
    $artistList.style.width = newWidth;
  }

  function setPosition() {
    $artistList.style.transform = "translateX(" + -size * slideCount + "px)";
  }

  function moveSlide() {
    $artistList.style.left = -currentIdx * size + "px";
    currentIdx = currentIdx % slideCount;
    currentIdx++;
    // console.log(currentIdx, slideCount);

    // loop
    if (currentIdx === slideCount) {
      setTimeout(() => {
        $artistList.style.transition = "none";
        $artistList.style.left = "0px";
      }, 3500);
      setTimeout(() => {
        $artistList.style.transition = "all 0.5s";
      }, 3600);
    }
  }

  // Button click
  $indicator.forEach((btn) =>
    btn.addEventListener("click", () => {
      currentIdx = btn.dataset.btn_idx - 1;
      // console.log(prevIdx, currentIdx);
      Math.abs(currentIdx - prevIdx) !== 1
        ? ($artistList.style.transition = "none")
        : ($artistList.style.transition = "all 0.5s");

      $artistList.style.left = -currentIdx * size + "px";

      prevIdx = currentIdx;
    })
  );

  setInterval(() => {
    moveSlide();
  }, 3000);
};

window.addEventListener("DOMContentLoaded", () => carouselLoop());
