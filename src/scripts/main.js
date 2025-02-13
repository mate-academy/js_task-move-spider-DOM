'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const mouseClickCoordX = e.clientX;
  const mouseClickCoordY = e.clientY;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const wallTop = wall.offsetTop;
  const wallLeft = wall.offsetLeft;

  spider.style.left = `${mouseClickCoordX - wallLeft - 10 - spiderWidth / 2}px`;

  spider.style.top = `${mouseClickCoordY - wallTop - 10 - spiderHeight / 2}px`;
});
