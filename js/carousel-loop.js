const carouselLoop = () => {
  const $indicator = document.querySelectorAll(
    ...[".home__artist__control__indicator"]
  );
  const $artistWrap = get(".home__artist");
  const $artistList = get(".home__artist__list");
  const $artistItems = document.querySelectorAll(".home__artist__item");

  const size = $artistWrap.clientWidth;
  const slideSpeed = 1000;
  const startNum = 0;
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

  // function makeClone() {
  //   let firstClone = $artistItems[0].cloneNode(true);
  //   let lastClone = $artistItems[slideCount - 1].cloneNode(true);
  //   firstClone.classList.add("clone");
  //   lastClone.classList.add("clone");
  //   $artistList.append(firstClone);
  //   $artistList.prepend(lastClone);

  //   updateWidth();
  // }

  function updateWidth() {
    let currentSlides = document.querySelectorAll(".home__artist__item");
    let newSlideCount = currentSlides.length;
    const newWidth = size * newSlideCount + "px";
    $artistList.style.width = newWidth;
  }

  function setPosition() {
    $artistList.style.transform = "translateX(" + -size * slideCount + "px)";
  }

  let count = 0;
  function moveSlide(count) {
    $artistList.style.left = -count * size + "px";
    count++;
    currentIdx = count;
    console.log(count, currentIdx, slideCount);

    // loop
    if (currentIdx === slideCount || -currentIdx === slideCount) {
      setTimeout(() => {
        $artistList.style.transition = "none";
        $artistList.style.left = "0px";
        count = 0;
      }, 500);
      setTimeout(() => {
        $artistList.style.transition = "0.5s ease-out";
      }, 600);
    }
  }

  // function setPosition() {
  //   $artistList.style.transform =
  //     "translateX(" + -size * (startNum + 1) + "px)";
  // }

  // let curIndex = startNum;
  // let curSlide = $artistItems[curIndex];
  // curSlide.classList.add("slide_active");

  //   if(currentIdx == slideCount || -currentIdx == slideCount){
  //     setTimeout(function(){
  //         innerSlide.style.transition = 'none';
  //         innerSlide.style.left = '0px';
  //         currentIdx = 0;
  //     },500);
  //     setTimeout(function(){
  //         innerSlide.style.transition = '0.5s ease-out';
  //     },600);
  // }

  // Button click
  // $indicator.forEach((btn) =>
  //   btn.addEventListener("click", () => {
  //     currentIdx = btn.dataset.btn_idx - 1;
  //     // console.log(prevIdx, currentIdx);
  //     Math.abs(currentIdx - prevIdx) !== 1
  //       ? ($artistList.style.transition = "none")
  //       : ($artistList.style.transition = "all 0.7s");

  //     $artistList.style.left = -currentIdx * size + "px";

  //     prevIdx = currentIdx;
  //   })
  // );

  setInterval(() => {
    moveSlide(count);

    // loopSlide();
  }, 2000);
};

window.addEventListener("DOMContentLoaded", () => carouselLoop());
