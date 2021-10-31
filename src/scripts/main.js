'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const wall = document.querySelector('.wall');
  const border = (wall.offsetWidth - wall.clientWidth) / 2;
  const wallTop = wall.getBoundingClientRect().top + border;
  const wallBottom = wall.getBoundingClientRect().bottom - border;
  const wallLeft = wall.getBoundingClientRect().left + border;
  const wallRight = wall.getBoundingClientRect().right - border;

  if (e.target !== wall) {
    return;
  }

  function getCoordX(point) {
    let coord = 0;

    if ((point - wallLeft) <= (spiderWidth / 2)) {
      coord = wallLeft + (spiderWidth / 2);

      return coord;
    }

    if ((wallRight - point) <= (spiderWidth / 2)) {
      coord = wallRight - (spiderWidth / 2);

      return coord;
    }

    return point;
  };

  function getCoordY(point) {
    let coord = 0;

    if ((point - wallTop) <= (spiderWidth / 2)) {
      coord = wallTop + (spiderWidth / 2);

      return coord;
    }

    if ((wallBottom - point) <= (spiderWidth / 2)) {
      coord = wallBottom - (spiderWidth / 2);

      return coord;
    }

    return point;
  }

  spider.style.left = `${getCoordX(e.clientX) - wallLeft - spiderWidth / 2}px`;
  spider.style.top = `${getCoordY(e.clientY) - wallTop - spiderWidth / 2}px`;
});
