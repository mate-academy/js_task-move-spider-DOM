'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  function checkPosition(coordinate) {
    const halfSpiderSize = spider.clientWidth / 2;
    const wallSize = e.target.clientWidth;

    if (coordinate < halfSpiderSize) {
      return halfSpiderSize;
    } else if (coordinate > wallSize - halfSpiderSize) {
      return wallSize - halfSpiderSize;
    }

    return coordinate;
  };

  const spider = document.querySelector('.spider');
  const topPosition = checkPosition(e.offsetY);
  const leftPosition = checkPosition(e.offsetX);

  spider.style.transform = 'translate(-50%, -50%)';
  spider.style.top = `${topPosition}px`;
  spider.style.left = `${leftPosition}px`;
});
