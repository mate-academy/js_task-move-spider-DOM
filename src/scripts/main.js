'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  let x = event.offsetX - spider.clientWidth / 2;
  let y = event.offsetY - spider.clientHeight / 2;
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (event.target !== wall) {
    return;
  }

  if (x < 0) {
    x = 0;
  };

  if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
