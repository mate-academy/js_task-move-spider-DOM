'use strict';

const spider = document.querySelector('.spider');
const halfSpiderSize = spider.clientWidth / 2;

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const wallSize = e.target.clientWidth;

  const topPosition = checkPosition(e.offsetY, wallSize);
  const leftPosition = checkPosition(e.offsetX, wallSize);

  spider.style.transform = 'translate(-50%, -50%)';
  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});

function checkPosition(coordinate, placeSize) {
  if (coordinate < halfSpiderSize) {
    return halfSpiderSize;
  }

  if (coordinate > placeSize - halfSpiderSize) {
    return placeSize - halfSpiderSize;
  }

  return coordinate;
};
