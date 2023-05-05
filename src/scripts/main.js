'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallStyle = wall.getBoundingClientRect();
  const style = getComputedStyle(wall);

  const wallLeft = wallStyle.left;
  const wallTop = wallStyle.top;
  const wallRight = wallLeft + wall.clientWidth;
  const wallBottom = wallTop + wall.clientHeight;

  const coordEventX = e.clientX;
  const coordEventY = e.clientY;

  if (coordEventX <= wallRight || coordEventX >= wallLeft) {
    spider.style.left = `${coordEventX - wallLeft - (spider.width / 2)}px`;
  }

  if (coordEventX > wallRight) {
    spider.style.left = `${wall.clientWidth - +parseFloat(
      style.borderRightWidth + style.borderLeftWidth) - (spider.width / 2)}px`;
  }

  if (+parseInt(spider.style.left) < 0) {
    spider.style.left = '0px';
  }

  if (coordEventY <= wallBottom || coordEventY >= wallTop) {
    spider.style.top = `${coordEventY - wallTop - (spider.height / 2)}px`;
  }

  if (coordEventY > wallBottom) {
    spider.style.top = `${wall.clientHeight - +parseFloat(
      style.borderTopWidth + style.borderBottomWidth) - (spider.width / 2)}px`;
  }

  if (+parseInt(spider.style.top) < 0) {
    spider.style.top = '0px';
  }
});
