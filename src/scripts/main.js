'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const objWidth = spider.clientWidth;
const objHeight = spider.clientHeight;
const bordWidth = (wall.offsetWidth - wall.clientWidth) / 2;

wall.addEventListener('click', e => {
  let x = e.offsetX;
  let y = e.offsetY;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  function calculateCoords(coord, objLength) {
    if (coord - objLength / 2 - bordWidth < 0) {
      return 0;
    }

    if (coord > wall.clientHeight - objLength / 2) {
      return `${wall.clientHeight - objLength}px`;
    }

    return `${coord - (objLength / 2)}px`;
  }

  spider.style.left = calculateCoords(x, objWidth);
  spider.style.top = calculateCoords(y, objHeight);
});
