'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  };

  let positionX = e.offsetX - spider.offsetWidth / 2;
  let positionY = e.offsetY - spider.offsetHeight / 2;

  function correctionPosition(coord, spiderSize, wallSize) {
    let resultCoord = coord;

    if (resultCoord < 0) {
      resultCoord = 0;
    } else if (resultCoord > wallSize - spiderSize) {
      resultCoord = wallSize - spiderSize;
    };

    return resultCoord;
  }

  positionX = correctionPosition(
    positionX,
    spider.offsetWidth,
    wall.clientWidth
  );

  positionY = correctionPosition(
    positionY,
    spider.offsetHeight,
    wall.clientHeight
  );

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
