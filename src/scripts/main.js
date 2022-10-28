'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  let x = e.offsetX - spider.offsetWidth / 2;
  let y = e.offsetY - spider.offsetHeight / 2;

  const coordsX = wall.clientWidth - spider.offsetWidth;
  const coordsY = wall.clientHeight - spider.offsetHeight;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > coordsX) {
    x = coordsX;
  }

  if (y > coordsY) {
    y = coordsY;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
