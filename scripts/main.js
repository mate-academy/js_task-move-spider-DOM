'use strict';

const wall = document.querySelector('.wall');
const wallSize = parseInt(window.getComputedStyle(wall).height);
const spider = document.querySelector('.spider');
const spiderSize = parseInt(window.getComputedStyle(spider).height);

spider.style = 'position: absolute; top: 0; left: 0;';

document.addEventListener('click', event => {
  if (event.target !== wall) {
    return;
  };

  let targetX = event.offsetX - spiderSize / 2;
  let targetY = event.offsetY - spiderSize / 2;

  if (targetX > wallSize - spiderSize) {
    targetX = wallSize - spiderSize;
  } else if (targetX < 0) {
    targetX = 0;
  };

  if (targetY > wallSize - spiderSize) {
    targetY = wallSize - spiderSize;
  } else if (targetY < 0) {
    targetY = 0;
  };

  spider.style.top = `${targetY}px`;
  spider.style.left = `${targetX}px`;
});
