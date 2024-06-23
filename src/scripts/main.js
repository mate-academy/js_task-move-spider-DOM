'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  let coordX = e.offsetX;
  let coordY = e.offsetY;

  if (e.target.matches('.spider')) {
    coordX += spider.offsetLeft;
    coordY += spider.offsetTop;
  }

  const spiderCoordXCenter = spider.clientWidth / 2;
  const spiderCoordYCenter = spider.clientHeight / 2;

  let moveLeft = coordX - spiderCoordXCenter;
  let moveTop = coordY - spiderCoordYCenter;

  if (coordX <= spiderCoordXCenter) {
    moveLeft = 0;
  }

  if (coordX >= wall.clientWidth - spiderCoordXCenter) {
    moveLeft = wall.clientWidth - spider.clientWidth;
  }

  if (coordY <= spiderCoordYCenter) {
    moveTop = 0;
  }

  if (coordY >= wall.clientHeight - spiderCoordYCenter) {
    moveTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${moveLeft}px`;
  spider.style.top = `${moveTop}px`;
});
