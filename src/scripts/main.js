'use strict';

const spider = document.querySelector('.spider');

const spiderSize = spider.clientHeight;

const wall = document.querySelector('.wall');

const wallSize = wall.clientHeight;

const changeCoord = function(topCoord, leftCoord, elementToMove) {
  const top = checkCoord(topCoord);
  const left = checkCoord(leftCoord);

  function checkCoord(coord) {
    if (coord < 0) {
      return 0;
    }

    if (coord + spiderSize > wallSize) {
      return wallSize - spiderSize;
    }

    return coord;
  }

  elementToMove.style.top = `${top}px`;
  elementToMove.style.left = `${left}px`;
};

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const topCoord = (e.offsetY - spiderSize / 2);
  const leftCoord = (e.offsetX - spiderSize / 2);

  changeCoord(topCoord, leftCoord, spider);
});
