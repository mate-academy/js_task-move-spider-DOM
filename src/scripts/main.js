"use strict";

document.addEventListener("click", (e) => {
  const spider = document.querySelector(".spider");
  const wall = document.querySelector(".wall");

  const clickX = e.clientX;
  const clickY = e.clientY;
  const wallRect = wall.getBoundingClientRect();

  const spiderX = Math.max(
    wallRect.left,
    Math.min(
      wallRect.right - spider.clientWidth,
      clickX - spider.clientWidth / 2
    )
  );
  const spiderY = Math.max(
    wallRect.top,
    Math.min(
      wallRect.bottom - spider.clientHeight,
      clickY - spider.clientHeight / 2
    )
  );

  spider.style.left = spiderX + "px";
  spider.style.top = spiderY + "px";
});
