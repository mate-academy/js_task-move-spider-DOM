'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderSize = parseInt(getComputedStyle(spider).height, 10);

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);
  const wallRect = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let offsetX = x - wallRect.left - wallBorder - spiderSize / 2;
    let offsetY = y - wallRect.top - wallBorder - spiderSize / 2;

    if (offsetX < spiderSize) {
      offsetX = 0;
    }

    if (offsetY < spiderSize) {
      offsetY = 0;
    }

    if (wall.clientHeight - offsetY < spiderSize) {
      offsetY = wall.clientHeight - spiderSize;
    }

    if (wall.clientWidth - offsetX < spiderSize) {
      offsetX = wall.clientWidth - spiderSize;
    }

    spider.style.top = `${offsetY}px`;
    spider.style.left = `${offsetX}px`;
  }
});
