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

  function getCoords(input, sideA, sideB) {
    let coord = 0;

    if ((input - sideA) <= (spiderWidth / 2)) {
      coord = sideA + (spiderWidth / 2);

      return coord;
    }

    if ((sideB - input) <= (spiderWidth / 2)) {
      coord = sideB - (spiderWidth / 2);

      return coord;
    }

    return input;
  }

  spider.style.left = `${getCoords(e.clientX, wallLeft, wallRight)
    - wallLeft - spiderWidth / 2}px`;

  spider.style.top = `${getCoords(e.clientY, wallTop, wallBottom)
    - wallTop - spiderWidth / 2}px`;
});
