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

  function getCoords(input) {
    let coord = 0;

    if (input === e.clientX) {
      if ((input - wallLeft) <= (spiderWidth / 2)) {
        coord = wallLeft + (spiderWidth / 2);

        return coord;
      }

      if ((wallRight - input) <= (spiderWidth / 2)) {
        coord = wallRight - (spiderWidth / 2);

        return coord;
      }

      return input;
    }

    if (input === e.clientY) {
      if ((input - wallTop) <= (spiderWidth / 2)) {
        coord = wallTop + (spiderWidth / 2);

        return coord;
      }

      if ((wallBottom - input) <= (spiderWidth / 2)) {
        coord = wallBottom - (spiderWidth / 2);

        return coord;
      }

      return input;
    }
  }

  spider.style.left = `${getCoords(e.clientX) - wallLeft - spiderWidth / 2}px`;
  spider.style.top = `${getCoords(e.clientY) - wallTop - spiderWidth / 2}px`;
});
