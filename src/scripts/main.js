'use strict';
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const coordX = e.clientX;
  const coordY = e.clientY;

  const spiderSize = parseInt(getComputedStyle(spider).width, 10);
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);

  const wallRect = wall.getBoundingClientRect();

  let vertShift = coordY - wallRect.top - wallBorder - spiderSize / 2;
  let horizShift = coordX - wallRect.left - wallBorder - spiderSize / 2;

  spider.style.top = `${vertShift}px`;
  spider.style.left = `${horizShift}px`;
});

