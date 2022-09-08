'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const shiftX = spider.clientWidth / 2;
const shiftY = spider.clientHeight / 2;
const startWallLeft = wall.getBoundingClientRect().left
  + window.scrollX + wall.clientLeft;
const startWallTop = wall.getBoundingClientRect().top
  + window.scrollY + wall.clientTop;
const endWallRight = startWallLeft + wall.clientWidth - spider.clientWidth;
const endWallBottom = startWallTop + wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  if (!e.target.matches('.wall')) {
    return;
  }

  const positionX = e.clientX - startWallLeft - shiftX;
  const positionY = e.clientY - startWallTop - shiftY;

  spider.style.left = getPosition({
    clientCoordinate: e.clientX,
    startOfArea: startWallLeft,
    endOfArea: endWallRight,
    areaSize: wall.clientWidth,
    itemSize: spider.clientWidth,
    position: positionX,
  });

  spider.style.top = getPosition({
    clientCoordinate: e.clientY,
    startOfArea: startWallTop,
    endOfArea: endWallBottom,
    areaSize: wall.clientHeight,
    itemSize: spider.clientHeight,
    position: positionY,
  });
});

function getPosition(objParam) {
  const
    { clientCoordinate, startOfArea, endOfArea, areaSize, itemSize, position }
    = objParam;

  if (clientCoordinate < startOfArea || position < 0) {
    return `0px`;
  }

  if (clientCoordinate > endOfArea) {
    return `${areaSize - itemSize}px`;
  }

  return `${position}px`;
}
