'use strict';

document.addEventListener('click', e => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderCenter = {
    x: spider.offsetWidth / 2,
    y: spider.offsetHeight / 2,
  };

  const wallClientLength = {
    x: wall.clientWidth,
    y: wall.clientHeight,
  };

  const wallCoordsLT = {
    x: wall.getBoundingClientRect().x + wall.clientLeft,
    y: wall.getBoundingClientRect().y + wall.clientTop,
  };

  const wallCoordsRB = {
    x: wallCoordsLT.x + wall.clientWidth,
    y: wallCoordsLT.y + wall.clientHeight,
  };

  const clickCoords = {
    x: e.clientX,
    y: e.clientY,
  };

  function setSpiderPosition(direction, coords) {
    if (clickCoords[coords] < wallCoordsLT[coords] + spiderCenter[coords]) {
      spider.style[direction] = '0';
    } else if (clickCoords[coords]
      > wallCoordsRB[coords] - spiderCenter[coords]) {
      spider.style[direction] = wallClientLength[coords]
      - 2 * spiderCenter[coords] + 'px';
    } else {
      spider.style[direction] = clickCoords[coords]
      - wallCoordsLT[coords]
      - spiderCenter[coords] + 'px';
    }
  }

  setSpiderPosition('left', 'x');
  setSpiderPosition('top', 'y');
});
