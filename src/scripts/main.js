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

  x = Math.max(0, x);
  x = Math.min(maxX, x);
  y = Math.max(0, y);
  y = Math.min(maxY, y);
  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
