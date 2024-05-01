/* eslint-disable no-useless-return */
'use strict';

document.addEventListener('click', (e) => {
  const boxWall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const wallBorder = boxWall.getBoundingClientRect();

  let newSpiderCoordX =
    e.clientX - boxWall.clientLeft - wallBorder.left - spider.clientWidth / 2;

  if (newSpiderCoordX < 0) {
    newSpiderCoordX = 0;
  }

  if (boxWall.clientWidth < spider.clientWidth + newSpiderCoordX) {
    newSpiderCoordX = boxWall.clientWidth - spider.clientWidth;
  }

  let newSpiderCoordY =
    e.clientY - wallBorder.y - boxWall.clientTop - spider.clientHeight / 2;

  if (newSpiderCoordY < 0) {
    newSpiderCoordY = 0;
  }

  if (boxWall.clientHeight < spider.clientHeight + newSpiderCoordY) {
    newSpiderCoordY = boxWall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${newSpiderCoordX}px`;
  spider.style.top = `${newSpiderCoordY}px`;
});
