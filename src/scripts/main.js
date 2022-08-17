'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const spider = document.querySelector('.spider');

  const maxXCoord = wall.clientWidth - spider.clientWidth;
  const maxYCoord = wall.clientHeight - spider.clientHeight;

  let coordX = e.offsetX - spider.clientWidth / 2;
  let coordY = e.offsetY - spider.clientHeight / 2;

  coordX = coordX > maxXCoord ? maxXCoord : coordX;
  coordX = coordX < 0 ? 0 : coordX;

  coordY = coordY > maxYCoord ? maxXCoord : coordY;
  coordY = coordY < 0 ? 0 : coordY;

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
