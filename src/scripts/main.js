'use strict';

document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (event.target !== wall) {
    return;
  }

  let targetX = event.offsetX - spider.offsetWidth / 2;
  let targetY = event.offsetY - spider.offsetHeight / 2;

  function overflowCorrection(coord, spiderSize, wallSize) {
    let result = coord;

    if (result < 0) {
      result = 0;
    } else if (result > wallSize - spiderSize) {
      result = wallSize - spiderSize;
    };

    return result;
  }

  targetX = overflowCorrection(targetX, spider.offsetWidth, wall.clientWidth);
  targetY = overflowCorrection(targetY, spider.offsetHeight, wall.clientHeight);

  spider.style.top = `${targetY}px`;
  spider.style.left = `${targetX}px`;
});
