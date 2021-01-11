'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function setCoord(coord, outerSize, innerSize) {
  const moveCoord = coord - innerSize / 2;

  if (moveCoord < 0) {
    return 0;
  }

  if (moveCoord > (outerSize - innerSize)) {
    return outerSize - innerSize;
  }

  return moveCoord;
}

document.addEventListener('click', e => {
  if (e.target === wall) {
    spider.style.top
    = `${setCoord(e.offsetY, wall.clientHeight, spider.height)}px`;

    spider.style.left
    = `${setCoord(e.offsetX, wall.clientWidth, spider.width)}px`;
  }
});
