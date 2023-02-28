"use strict";

const wall = document.body.querySelector(".wall");
const spider = document.body.querySelector(".spider");

const halfSpiderX = spider.offsetWidth / 2;
const halfSpiderY = spider.offsetHeight / 2;

document.addEventListener("click", (e) => {
  function moveAt(pageX, pageY) {
    const wallOffsetLeft = wall.offsetLeft + wall.clientLeft;
    const wallOffsetTop = wall.offsetTop + wall.clientTop;
    const wallRect = wall.getBoundingClientRect();

    const spiderShiftLeft = pageX - wallOffsetLeft - halfSpiderX + "px";
    const spiderShiftTop = pageY - wallOffsetTop - halfSpiderY + "px";

    const maxX = wallRect.right - wall.clientLeft - halfSpiderX;
    const minX = wallRect.left + wall.clientLeft + halfSpiderX;

    const maxY = wallRect.bottom - wall.clientTop - halfSpiderY;
    const minY = wallRect.top + wall.clientTop + halfSpiderY;

    if (pageX > maxX) {
      spider.style.left = wall.clientWidth - halfSpiderX * 2 + "px";
    } else if (pageX < minX) {
      spider.style.left = 0 + "px";
    } else {
      spider.style.left = spiderShiftLeft;
    }

    if (pageY > maxY) {
      spider.style.top = wall.clientHeight - halfSpiderY * 2 + "px";
    } else if (pageY < minY) {
      spider.style.top = 0 + "px";
    } else {
      spider.style.top = spiderShiftTop;
    }
  }

  if (e.target !== wall) {
    return;
  }

  moveAt(e.pageX, e.pageY);
});
