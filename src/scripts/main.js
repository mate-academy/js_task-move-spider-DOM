'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (event) => {
  if (event.target !== wall) {
    return;
  }

  function sideCheck(point, wallSize, spiderSize) {
    let result = point - spiderSize / 2;

    if (point < spiderSize / 2) {
      result = 0;
    } else if (point > (wallSize - spiderSize)) {
      result = wallSize - spiderSize;
    }

    return result;
  }

  const spiderTop
  = sideCheck(event.offsetY, wall.clientHeight, spider.clientHeight);
  const spiderLeft
  = sideCheck(event.offsetX, wall.clientWidth, spider.clientWidth);

  spider.style.top = spiderTop + `px`;
  spider.style.left = spiderLeft + `px`;
});
