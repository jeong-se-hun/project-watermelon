let slider = document.querySelector(".today-section__card__wrap");
let innerSlider = document.querySelector(".today-section__card__list");
let pressed = false;
let startx;
let x;

// 클릭 유지 시
slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.clientX - innerSlider.offsetLeft;

  // console.log(e.clientX, innerSlider.offsetLeft);
  slider.style.cursor = "grabbing"; // 커서모양 변환 -> 잡은모양
});

// 마우스가 컨텐츠안에 들어갈때
slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab"; // 커서모양 -> 손바닥
});

// 클릭 풀 때
slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

// 마우스를 움직일 때
slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.clientX;

  innerSlider.style.left = `${x - startx}px`;

  checkboundary();
});

// 시작점, 끝점에서 실행중지(영역안에서만 움직이도록)
function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
