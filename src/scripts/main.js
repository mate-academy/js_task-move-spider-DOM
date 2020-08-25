'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallSize = parseInt(window.getComputedStyle(wall).width);
const spiderSize = parseInt(window.getComputedStyle(spider).width);
const border = wallSize - (spiderSize / 2);

wall.addEventListener('click', e => {
  const x = e.offsetX > border
    ? border
    : e.offsetX < spiderSize / 2
      ? spiderSize / 2 : e.offsetX;
  const y = e.offsetY > border
    ? border
    : e.offsetY < spiderSize / 2
      ? spiderSize / 2 : e.offsetY;

  spider.style.cssText = `top: ${y}px; left: ${x}px;
  transform: translate(-50%, -50%);
  pointer-events: none;`;
});
