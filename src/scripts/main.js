'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  let coordX = event.offsetX - spider.offsetWidth / 2;
  let coordY = event.offsetY - spider.offsetHeight / 2;

  const extremeTopCoordY = 0;
  const extremeRightCoordX = wall.clientWidth - spider.offsetWidth;
  const extremeBottomCoordY = wall.clientHeight - spider.offsetHeight;
  const extremeLeftCoordX = 0;

  if (coordX < extremeLeftCoordX) {
    coordX = extremeLeftCoordX;
  }

  if (coordX > extremeRightCoordX) {
    coordX = extremeRightCoordX;
  }

  if (coordY < extremeTopCoordY) {
    coordY = extremeTopCoordY;
  }

  if (coordY > extremeBottomCoordY) {
    coordY = extremeBottomCoordY;
  }

  spider.style.left = coordX + 'px';
  spider.style.top = coordY + 'px';
});
