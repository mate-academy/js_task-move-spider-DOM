'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const borderWidth = parseFloat(getComputedStyle(wall).borderWidth);

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall') || e.target === spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  const wallRectLeft = wallRect.left + borderWidth + window.scrollX;
  const wallRectTop = wallRect.top + borderWidth + window.scrollY;

  const xClickCoord = e.clientX;
  const yClickCoord = e.clientY;

  let x = xClickCoord - wallRectLeft - spiderHalfWidth;
  let y = yClickCoord - wallRectTop - spiderHalfHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spider.offsetWidth > wall.clientWidth) {
    x = wall.clientWidth - spider.offsetWidth;
  }

  if (y + spider.offsetHeight > wall.clientHeight) {
    y = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
