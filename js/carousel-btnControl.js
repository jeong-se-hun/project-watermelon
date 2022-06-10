// get
const $slideBtns = document.querySelectorAll(".home__new__slide__button");
const $allBtn = get(".home__new__button--all");
const $kpopBtn = get(".home__new__button--kpop");
const $popBtn = get(".home__new__button--pop");
const $prevBtn = get(".home__new__control--prev");
const $nextBtn = get(".home__new__control--next");
const $innerSlide = get(".home__new__inner");
const $slideItems = document.querySelectorAll(".home__new__slide");
const $controller = get(".home__new__control");
const $number = get(".home__new__page-number");

const size = $slideItems[0].clientWidth;
let currentIdx = 0;
let pageNum = $number.innerText;
let slideCount = $slideItems.length;
pageNum = Number(pageNum);

const pages = {
  all: 1,
  kpop: 4,
  pop: 7,
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
  moveSlide(index - 1);
  $innerSlide.style.transition = "none";
};

// Event
$allBtn.addEventListener("click", (e) => {
  $slideBtns.forEach((btn) => btn.classList.remove("on"));
  e.target.classList.add("on");

  $number.innerText = pages.all;
  pageNum = pages.all;
  moveTo(pages.all);
});

$kpopBtn.addEventListener("click", (e) => {
  $slideBtns.forEach((btn) => btn.classList.remove("on"));
  e.target.classList.add("on");

  $number.innerText = pages.kpop;
  pageNum = pages.kpop;
  moveTo(pages.kpop);
});

$popBtn.addEventListener("click", (e) => {
  $slideBtns.forEach((btn) => btn.classList.remove("on"));
  e.target.classList.add("on");
  $number.innerText = pages.pop;
  pageNum = pages.pop;
  moveTo(pages.pop);
});

$nextBtn.addEventListener("click", () => {
  if (pageNum === 9) return;
  moveSlide(currentIdx + 1, "end");
  pageNum++;
  $number.innerText = pageNum;
});

$prevBtn.addEventListener("click", () => {
  if (pageNum === 1) return;
  moveSlide(currentIdx - 1, "start");
  pageNum--;
  $number.innerText = pageNum;
});
