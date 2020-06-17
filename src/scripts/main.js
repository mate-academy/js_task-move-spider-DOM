'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const wallCoords = [wallRect.left, wallRect.top];
  const spiderSizes = [spider.offsetWidth, spider.offsetHeight];

  const left = e.clientX - wallCoords[0] - spiderSizes[0] / 2 - wall.clientLeft;
  const top = e.clientY - wallCoords[1] - spiderSizes[1] / 2 - wall.clientTop;

  function checkCoord(axis, coord) {
    let wallSize, spiderSize, wallGap;

    switch (axis) {
      case 'x':
        wallSize = wallRect.width;
        spiderSize = spiderSizes[0];
        wallGap = wall.clientLeft;
        break;
      case 'y':
        wallSize = wallRect.height;
        spiderSize = spiderSizes[1];
        wallGap = wall.clientTop;
        break;
    }

    if (coord < 0) {
      return 0;
    }

    const maxCoord = wallSize - spiderSize - wallGap * 2;

    if (coord > maxCoord) {
      return maxCoord;
    }

    return coord;
  }

  spider.style.top = `${checkCoord('y', top)}px`;
  spider.style.left = `${checkCoord('x', left)}px`;
});
