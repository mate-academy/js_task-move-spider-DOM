'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  let targetX = e.offsetX - spider.offsetWidth / 2;
  let targetY = e.offsetY - spider.offsetHeight / 2;

  const correctTarget = (target, wallSize, spiderSize) => {
    if (target < 0) {
      return 0;
    } else if (target > wallSize - spiderSize) {
      return wallSize - spiderSize;
    }

    return target;
  };

  targetX = correctTarget(targetX, wall.clientWidth, spider.offsetWidth);
  targetY = correctTarget(targetY, wall.clientHeight, spider.offsetHeight);

  spider.style.top = `${targetY}px`;
  spider.style.left = `${targetX}px`;
});
