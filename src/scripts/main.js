'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let x = e.offsetX - spider.height / 2;
  let y = e.offsetY - spider.width / 2;

  const maxX = wall.clientHeight - spider.height;
  const maxY = wall.clientWidth - spider.width;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style = `top: ${y}px; left: ${x}px;`;
});
