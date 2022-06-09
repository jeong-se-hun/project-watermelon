const prevButton = get(".home__hot__hot-issue-prev");
const nextButton = get(".home__hot__hot-issue-next");
const hotIssuePageNum = get(".home__hot__hot-issue-page-num-current-page");
const hotIssueList = getAll(".home__hot__hot-issue-list");
const chartTab = getAll(".home__hot__melon-chart__tab-box__tab");
const melonLists = getAll(".home__hot__melon-chart__list-area");
const melonListTop = get(".home__hot__melon-chart__list-area.top");
const melonListPop = get(".home__hot__melon-chart__list-area.pop");
const melonListArtist = get(".home__hot__melon-chart__list-area.artist");
const favorites = getAll(".home__hot__melon-chart__favorites");

// prevButton 이벤트
prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  hotIssuePageNum.innerText = 1;
  nextButton.style.backgroundPosition = "right -220px";
  prevButton.style.backgroundPosition = "left -202px";

  hotIssueList.forEach((list, i) => {
    i === 1
      ? list.classList.remove("is-active")
      : list.classList.add("is-active");
  });
});

// nextButton 이벤트
nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  hotIssuePageNum.innerText = 2;
  nextButton.style.backgroundPosition = "right -202px";
  prevButton.style.backgroundPosition = "left -220px";

  hotIssueList.forEach((list, i) => {
    i === 0
      ? list.classList.remove("is-active")
      : list.classList.add("is-active");
  });
});

// chartTab 탭 이벤트

chartTab.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    chartTab.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    melonLists.forEach((list) => {
      list.classList.remove("is-active");
    });

    e.target.classList.add("is-active");

    if (e.target.classList.contains("top")) {
      melonListTop.classList.add("is-active");
    } else if (e.target.classList.contains("pop")) {
      melonListPop.classList.add("is-active");
    } else if (e.target.classList.contains("artist")) {
      melonListArtist.classList.add("is-active");
    }
    hoverChart();
  });
});

// 멜론 차트 아이템 호버 이벤트
function hoverChart() {
  melonLists.forEach((list) => {
    if (list.classList.contains("is-active")) {
      const items = list.querySelectorAll(".home__hot__melon-chart__item");

      items.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          e.preventDefault();
          items.forEach((item) => {
            item.classList.remove("is-active");
          });
          item.classList.add("is-active");
        });
      });
    }
  });
}
hoverChart();

// 아티스트 즐겨찾기 이벤트
favorites.forEach((stars) => {
  stars.addEventListener("click", (e) => {
    e.preventDefault();
    stars.classList.toggle("is-active");
  });
});
