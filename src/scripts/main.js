'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const halfSpiderSize = spider.clientWidth / 2;
  const wallSize = e.target.clientWidth;

  function checkPosition(coordinate) {
    if (coordinate < halfSpiderSize) {
      return halfSpiderSize;
    }

    if (coordinate > wallSize - halfSpiderSize) {
      return wallSize - halfSpiderSize;
    }

    return coordinate;
  };

  const topPosition = checkPosition(e.offsetY);
  const leftPosition = checkPosition(e.offsetX);

  spider.style.transform = 'translate(-50%, -50%)';
  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
