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

  // 클론
  const makeClone = (list, items) => {
    for (let i = 0; i < slideCount; i++) {
      let cloneSlide = items[i].cloneNode(true);
      cloneSlide.classList.add("clone");
      list.append(cloneSlide);
    }
    for (let i = slideCount - 1; i >= 0; i--) {
      let cloneSlide = items[i].cloneNode(true);
      cloneSlide.classList.add("clone");
      list.prepend(cloneSlide);
    }
  };

  // 전체 가로 폭
  const updateWidth = () => {
    let currentSlides = document.querySelectorAll(".home__artist__item");
    let newSlideCount = currentSlides.length;
    const newWidth = size * newSlideCount + "px";
    $artistList.style.width = newWidth;
  };

  // 기존 첫번째 이미지 위치로 포지션 이동
  const setPosition = () => {
    $artistList.style.transform = "translateX(" + -size * slideCount + "px)";
  };

  const moveSlide = () => {
    $artistList.style.left = -currentIdx * size + "px";
    currentIdx = currentIdx % slideCount;
    $indicator.forEach((btn) => (btn.style.borderColor = "#b4b4b4"));
    $indicator[currentIdx].style.borderColor = "#00cd3c";
    currentIdx++;
    // console.log(currentIdx, slideCount);

    // 루프
    if (currentIdx === slideCount) {
      setTimeout(() => {
        $artistList.style.transition = "none";
        $artistList.style.left = "0px";
      }, 4500);
      setTimeout(() => {
        $artistList.style.transition =
          "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
      }, 4600);
    }
  };

  makeClone($artistList, $artistItems);
  updateWidth();
  setPosition();

  // 초기 트랜지션 추가
  setTimeout(() => {
    $artistList.style.left = "0px";
    $artistList.style.transition = "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
  }, 500);

  // 루프 실행
  setInterval(() => {
    moveSlide();
  }, 4000);

  // Button click
  $indicator.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      currentIdx = indicator.dataset.btn_idx - 1;
      $indicator.forEach((btn) => (btn.style.borderColor = "#b4b4b4"));
      indicator.style.borderColor = "#00cd3c";

      Math.abs(currentIdx - prevIdx) !== 1
        ? ($artistList.style.transition = "none")
        : ($artistList.style.transition =
            "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)");

      $artistList.style.left = -currentIdx * size + "px";

      prevIdx = currentIdx;
    });
  });

  // return {
  //   clone: makeClone,
  //   move: moveSlide,
  // };
};

window.addEventListener("DOMContentLoaded", () => carouselLoop());
// let loop = carouselLoop();
// export default loop;
