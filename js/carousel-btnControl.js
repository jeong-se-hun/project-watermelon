const get = (target) => {
  return document.querySelector(target);
};

// get
const $allBtn = get(".home__new__button--all");
const $kpopBtn = get(".home__new__button--kpop");
const $popBtn = get(".home__new__button--pop");
const $prevBtn = get(".home__new__control--prev");
const $nextBtn = get(".home__new__control--next");
const $innerSlide = get(".home__new__inner");
const $slideItems = document.querySelectorAll(".home__new__slide");

const size = $slideItems[0].clientWidth;
let currentIdx = 0;
let slideCount = $slideItems.length;

const pages = {
  all: 0,
  kpop: 1,
  pop: 2,
};

// Function
const moveSlide = (num, role) => {
  if (role === "end" && currentIdx === slideCount - 1) return;
  if (role === "start" && currentIdx === 0) return;

  $innerSlide.style.transition = "all .7s ease-out";
  $innerSlide.style.left = -num * size + "px";
  currentIdx = num;
};

const moveTo = (index) => {
  currentIdx = index;
  moveSlide(index);
  $innerSlide.style.transition = "none";
};

// Event
$allBtn.addEventListener("click", () => moveTo(pages.all));
$kpopBtn.addEventListener("click", () => moveTo(pages.kpop));
$popBtn.addEventListener("click", () => moveTo(pages.pop));
$nextBtn.addEventListener("click", () => moveSlide(currentIdx + 1, "end"));
$prevBtn.addEventListener("click", () => moveSlide(currentIdx - 1, "start"));
