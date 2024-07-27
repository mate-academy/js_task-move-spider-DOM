'use strict';

const wall = document.querySelector('div');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const clickY = e.clientY;
  const clickX = e.clientX;

  const wallRect = wall.getBoundingClientRect();
  const wallBorderWidth = parseFloat(getComputedStyle(wall).borderWidth);

  let spiderX = clickX - spider.offsetWidth / 2 - wallBorderWidth;
  let spiderY = clickY - spider.offsetHeight / 2 - wallBorderWidth;

  if (
    clickX < wallRect.left ||
    clickX > wallRect.right ||
    clickY > wallRect.bottom ||
    clickY < wallRect.top
  ) {
    return;
  }

  if (spiderX < wallRect.left) {
    spiderX = wallRect.left;
  }

  if (spiderY < wallRect.top) {
    spiderY = wallRect.top;
  }

  if (spiderX + spider.offsetWidth > wallRect.right - 2 * wallBorderWidth) {
    spiderX = wallRect.right - spider.offsetHeight - 2 * wallBorderWidth;
  }

  if (spiderY + spider.offsetHeight > wallRect.bottom - 2 * wallBorderWidth) {
    spiderY = wallRect.bottom - spider.offsetWidth - 2 * wallBorderWidth;
  }

  spider.style.top = `${spiderY - wallRect.top}px`;
  spider.style.left = `${spiderX - wallRect.left}px`;
});
