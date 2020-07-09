'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = spider.parentElement;

  if (e.target !== wall) {
    return;
  }

  const halfSpiderX = spider.clientHeight / 2;
  const halfSpiderY = spider.clientWidth / 2;
  const wallPosition = wall.getBoundingClientRect();
  const minWallY = wallPosition.y + wall.clientTop;
  const minWallX = wallPosition.x + wall.clientLeft;
  const maxWallY = wall.clientHeight - spider.clientHeight;
  const maxWallX = wall.clientWidth - spider.clientWidth;
  let y = e.clientY - minWallY - halfSpiderY;
  let x = e.clientX - minWallX - halfSpiderX;

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  }

  if (y > maxWallY) {
    y = maxWallY;
  }

  if (x > maxWallX) {
    x = maxWallX;
  }

  spider.style.cssText = `top: ${y}px; left: ${x}px`;
});
