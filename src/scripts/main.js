'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderSizeX = spider.clientWidth;
  const spiderSizeY = spider.clientHeight;

  const startX = wall.offsetLeft + wall.clientLeft;
  const startY = wall.offsetTop + wall.clientTop;
  const currentX = e.clientX - startX;
  const currentY = e.clientY - startY;

  if (
    currentX >= spiderSizeX / 2 &&
    currentY >= spiderSizeY / 2 &&
    currentX <= wall.clientWidth - spiderSizeX / 2 &&
    currentY <= wall.clientHeight - spiderSizeY / 2
  ) {
    spider.style.top = `${currentY - spiderSizeY / 2}px`;
    spider.style.left = `${currentX - spiderSizeX / 2}px`;
  }
});
