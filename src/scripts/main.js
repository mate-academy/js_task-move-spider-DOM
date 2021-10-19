'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  function calcCoord(distance, wallSize, spiderSize) {
    if (distance > (wallSize - spiderSize)) {
      return wallSize - spiderSize;
    }

    if (distance < spiderSize / 2) {
      return 0;
    }

    return distance - spiderSize / 2;
  }

  const coordX = calcCoord(
    e.offsetX,
    wall.clientWidth,
    spider.offsetWidth
  );

  const coordY = calcCoord(
    e.offsetY,
    wall.clientHeight,
    spider.offsetHeight
  );

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
