'use strict';

document.addEventListener('click', event => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (event.target !== wall) {
    return;
  }

  let positionX = event.offsetX - spider.offsetWidth / 2;
  let positionY = event.offsetY - spider.offsetHeight / 2;

  function overflowCorrection(coord, spiderSize, wallSize) {
    let result = coord;

    if (result < 0) {
      result = 0;
    } else if (result > wallSize - spiderSize) {
      result = wallSize - spiderSize;
    };

    return result;
  }

  positionX = overflowCorrection(positionX,
    spider.offsetWidth, wall.clientWidth);

  positionY = overflowCorrection(positionY,
    spider.offsetHeight, wall.clientHeight);

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
