'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const borderWidth = parseInt(
    getComputedStyle(wall).getPropertyValue('border-width')
  );

  const wallsInfo = wall.getBoundingClientRect();
  const spiderInfo = spider.getBoundingClientRect();

  const leftBorder = wallsInfo.left + window.pageXOffset + borderWidth;
  const rightBorder = leftBorder + wallsInfo.width - borderWidth * 2;

  const topBorder = wallsInfo.top + window.pageYOffset + borderWidth;
  const bottomBorder = topBorder + wallsInfo.height - borderWidth * 2;

  if (
    (e.clientX > rightBorder) || (e.clientX < leftBorder)
    || (e.clientY < topBorder) || (e.clientY > bottomBorder)
  ) {
    return;
  }

  let newX = e.clientX - leftBorder - spiderInfo.width / 2;
  let newY = e.clientY - topBorder - spiderInfo.height / 2;

  newX = newX < spiderInfo.width / 2 ? 0 : newX;

  newX = newX > rightBorder - leftBorder - spiderInfo.width
    ? rightBorder - leftBorder - spiderInfo.width : newX;

  newY = newY < spiderInfo.width / 2 ? 0 : newY;

  newY = newY > bottomBorder - topBorder - spiderInfo.height
    ? bottomBorder - topBorder - spiderInfo.height : newY;

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
