'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const target = e.target.closest('.wall');
  const wallBound = wall.getBoundingClientRect();

  if (target) {
    const cordsX = e.clientX;
    const cordsY = e.clientY;

    const wallWidth = parseFloat(getComputedStyle(wall).width);
    const wallHeight = parseFloat(getComputedStyle(wall).height);
    const leftBorder = parseFloat(getComputedStyle(wall).borderLeftWidth);
    const topBorder = parseFloat(getComputedStyle(wall).borderTopWidth);

    const moveX = cordsX - wallBound.x - leftBorder - spider.offsetWidth / 2;
    const moveY = cordsY - wallBound.y - topBorder - spider.offsetHeight / 2;

    const maxXCord = wallWidth - spider.offsetWidth;
    const maxYCord = wallHeight - spider.offsetHeight;

    if (moveX > wallWidth - spider.offsetWidth) {
      spider.style.left = `${maxXCord}px`;
    } else if (moveX < 0) {
      spider.style.left = 0;
    } else {
      spider.style.left = `${moveX}px`;
    }

    if (moveY > wallHeight - spider.offsetHeight) {
      spider.style.top = `${maxYCord}px`;
    } else if (moveY < 0) {
      spider.style.top = 0;
    } else {
      spider.style.top = `${moveY}px`;
    }
  }
});
