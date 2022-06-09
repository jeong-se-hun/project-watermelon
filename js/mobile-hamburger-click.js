const get = (target) => {
  return document.querySelector(target);
};

const getAll = function (target) {
  return document.querySelectorAll(target);
};

const $buttonBurger = get(".mobile-nav__btn-area");
const $mobileNavList = get(".mobile-nav__list");
const $slide = get(".slide");
const $slideHeaderClose = get(".slide__header__close");
const $left = get(".left");
const $right = get(".right");
const $djMainWrapper = get(".main__wrapper");

$buttonBurger.addEventListener("click", () => {
  $slide.classList.add("is-show");

  if ($slide.classList.contains("is-show")) {
    $left.classList.add("is-active");
    $right.classList.add("is-active");
    $mobileNavList.classList.add("is-active");
    $djMainWrapper.classList.add("is-hide");
  }
});

$slideHeaderClose.addEventListener("click", () => {
  $slide.classList.remove("is-show");
  $left.classList.remove("is-active");
  $right.classList.remove("is-active");
  $mobileNavList.classList.remove("is-active");
  $djMainWrapper.classList.remove("is-hide");
});
