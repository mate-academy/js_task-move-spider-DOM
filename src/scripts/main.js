'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallX = wall.offsetLeft;
  const wallY = wall.offsetTop;
  const wallBorderWidth = parseInt(getComputedStyle(wall).borderWidth, 10);
  const clickX = e.pageX;
  const clickY = e.pageY;

  spider.style.position = 'absolute';
  spider.style.left = `${clickX - wallX - wallBorderWidth - spider.width / 2}px`;
  spider.style.top = `${clickY - wallY - wallBorderWidth - spider.height / 2}px`;
});
