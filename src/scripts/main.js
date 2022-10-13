'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target === spider) {
    return;
  }

  if (e.target !== document.querySelector('body')) {
    let xCoordMove = e.offsetX - spider.width / 2;
    let yCoordMove = e.offsetY - spider.height / 2;

    const xMaxCoords = wall.clientWidth - spider.clientWidth;
    const yMaxCoords = wall.clientHeight - spider.clientHeight;

    if (xCoordMove < 0) {
      xCoordMove = 0;
    };

    if (yCoordMove < 0) {
      yCoordMove = 0;
    };

    if (xCoordMove > xMaxCoords) {
      xCoordMove = xMaxCoords;
    };

    if (yCoordMove > yMaxCoords) {
      yCoordMove = yMaxCoords;
    };

    spider.style.left = xCoordMove + 'px';
    spider.style.top = yCoordMove + 'px';
  }
});
