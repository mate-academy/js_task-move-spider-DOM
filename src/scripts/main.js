'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  function calculateCoord(offsetCoord, wallSize, spiderSize) {
    if (offsetCoord > (wallSize - spiderSize)) {
      return wallSize - spiderSize;
    }

    if (offsetCoord < spiderSize / 2) {
      return 0;
    }

    return offsetCoord - spiderSize / 2;
  }

  const coordX = calculateCoord(
    e.offsetX,
    wall.clientWidth,
    spider.offsetWidth
  );

  const coordY = calculateCoord(
    e.offsetY,
    wall.clientHeight,
    spider.offsetHeight
  );

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
