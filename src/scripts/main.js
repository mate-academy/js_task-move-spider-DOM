'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const spiderSize = parseInt(getComputedStyle(spider).height, 10);

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);

  let horizShift = e.clientX - wallRect.left - wallBorder - spiderSize / 2;
  let vertShift = e.clientY - wallRect.top - wallBorder - spiderSize / 2;

  const maxX = wall.clientWidth - spiderSize;
  const maxY = wall.clientHeight - spiderSize;

  horizShift = Math.max(0, Math.min(horizShift, maxX));
  vertShift = Math.max(0, Math.min(vertShift, maxY));

  spider.style.left = `${horizShift}px`;
  spider.style.top = `${vertShift}px`;
});
