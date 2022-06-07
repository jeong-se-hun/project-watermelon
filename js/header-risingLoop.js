// import loop from "./carousel-loop.js";

const risingLoop = () => {
  const $risingGroup = get(".header__rising__group");
  const $risingList = get(".header__rising__list");
  const $risingItem = document.querySelectorAll(".header__rising__item");

  // const paddingTop = 5;
  const marginSize = 12;
  const size = $risingItem[0].clientHeight + marginSize;
  const leadPosition = 255;

  let slideCount = $risingItem.length;
  let currentIdx = 0;
  // let curSlide;

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

    // curSlide = $risingItem[currentIdx];
    // curSlide.classList.add("slide-active");
  };

  // 전체 세로 폭
  const updateHeight = () => {
    let currentSlides = document.querySelectorAll(".header__rising__item");
    let newSlideCount = currentSlides.length;
    const newHeight = size * newSlideCount + "px";
    $risingList.style.height = newHeight;
  };

  // 기존 첫번째 이미지 위치로 포지션 이동
  const setPosition = () => {
    $risingList.style.transform = "translateY(" + -leadPosition + "px)";
  };

  const moveSlide = () => {
    $risingList.style.top = -currentIdx * size + "px";
    currentIdx = currentIdx % slideCount;
    currentIdx++;
    console.log(currentIdx, slideCount);

    // 루프
    if (currentIdx === slideCount) {
      setTimeout(() => {
        $risingList.style.transition = "none";
        $risingList.style.top = "0px";
      }, 1800);
      setTimeout(() => {
        $risingList.style.transition =
          "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
      }, 2000);
    }

    // curSlide.classList.remove("slide-active");
    // curSlide = $risingItem[currentIdx - 1]; // curSlide 변경
    // curSlide.classList.add("slide-active");
  };

  let loop;
  const loopStop = () => {
    clearInterval(loop);
    $risingList.style.transition = "none";
    $risingList.style.top = "0px";
  };

  const loopStart = () => {
    // setTimeout(() => {
    $risingList.style.transition = "none";
    $risingList.style.top = -(currentIdx - 1) * size + "px";
    // }, 100);
    setTimeout(() => {
      $risingList.style.transition = "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
    }, 300);

    loop = setInterval(() => {
      moveSlide();
    }, 1000);
  };

  $risingGroup.addEventListener("mouseenter", loopStop);
  $risingGroup.addEventListener("mouseleave", loopStart);

  makeClone($risingList, $risingItem);
  updateHeight();
  setPosition();

  // 초기 트랜지션 추가
  setTimeout(() => {
    $risingList.style.top = "0px";
    $risingList.style.transition = "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)";
  }, 300);

  loopStart();
};

risingLoop();
