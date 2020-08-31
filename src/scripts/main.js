'use strict';

document.addEventListener('click', (event) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (event.target !== wall) {
    return;
  }

  let x = event.offsetX - spider.width / 2;
  let y = event.offsetY - spider.height / 2;
  const maxX = wall.clientWidth - spider.width;
  const maxY = wall.clientHeight - spider.height;

  if (x < 0) {
    x = 0;
  } else if (y < 0) {
    y = 0;
  } else if (x > maxX) {
    x = maxX;
  } else if (y > maxY) {
    y = maxY;
  }
  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
