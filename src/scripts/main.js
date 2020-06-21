'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const wallCoodr = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');
  const breackPointTop = wall.clientHeight - spider.clientHeight;
  const breackPointLeft = wall.clientWidth - spider.clientWidth;

  if (e.target !== wall) {
    return;
  }

  const spiderCoord = {
    left: e.clientX - wallCoodr.x - wall.clientLeft - spider.clientWidth / 2,
    top: e.clientY - wallCoodr.y - wall.clientTop - spider.clientHeight / 2,
  };

  function checkCoordinate(axis, breackPoint) {
    if (spiderCoord[axis] < 0) {
      spiderCoord[axis] = 0;
    }

    if (spiderCoord[axis] > breackPoint) {
      spiderCoord[axis] = breackPoint;
    };

    return spiderCoord[axis];
  };

  spider.style.left = checkCoordinate('left', breackPointLeft) + 'px';
  spider.style.top = checkCoordinate('top', breackPointTop) + 'px';
});
