const $moreBtn = get(".more-btn");
const $djListSummer = get(".dj-list__summer");
const $djListSummerGroup = get(".dj-list__summer__group");

$moreBtn.addEventListener("click", () => {
  $djListSummer.classList.add("is-active");
  $djListSummerGroup.classList.add("is-active");
  $moreBtn.classList.add("hide");
});
