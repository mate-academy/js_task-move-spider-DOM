'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  let topCoord =
    e.clientY - wallRect.top - wall.clientTop - spider.clientHeight / 2;

  let leftCoord =
    e.clientX - wallRect.left - wall.clientLeft - spider.clientWidth / 2;

  if (topCoord < 0) {
    topCoord = 0;
  }

  if (leftCoord < 0) {
    leftCoord = 0;
  }

  if (topCoord > wall.clientHeight - spider.clientHeight) {
    topCoord = wall.clientHeight - spider.clientHeight;
  }

  if (leftCoord > wall.clientWidth - spider.clientWidth) {
    leftCoord = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = topCoord + 'px';
  spider.style.left = leftCoord + 'px';
});
