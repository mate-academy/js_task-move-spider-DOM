'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const xClick = e.offsetX;
  const yClick = e.offsetY;

  function getSpiderCoords(x, y) {
    const wallWidth = parseInt(getComputedStyle(wall).width);
    const wallHeight = parseInt(getComputedStyle(wall).height);
    const spiderWidth = parseInt(getComputedStyle(spider).width);
    const spiderHeight = parseInt(getComputedStyle(spider).height);
    let coordX;
    let coordY;

    if (x < spiderWidth / 2) {
      coordX = 0;
    } else if (x >= wallWidth - spiderWidth / 2) {
      coordX = wallWidth - spiderWidth;
    } else {
      coordX = x - spiderWidth / 2;
    }

    if (y < spiderHeight / 2) {
      coordY = 0;
    } else if (y > wallHeight - spiderHeight / 2) {
      coordY = wallHeight - spiderHeight;
    } else {
      coordY = y - spiderHeight / 2;
    }

    spider.style.left = `${coordX}px`;
    spider.style.top = `${coordY}px`;
  }

  getSpiderCoords(xClick, yClick);
});
