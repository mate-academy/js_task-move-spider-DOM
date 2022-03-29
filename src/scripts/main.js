'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  let y = e.offsetY - spider.clientWidth / 2;
  let x = e.offsetX - spider.clientHeight / 2;

  const yWall = wall.clientHeight - spider.clientHeight;
  const xWall = wall.clientWidth - spider.clientWidth;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  }

  if (y > yWall) {
    y = yWall;
  }

  if (x > xWall) {
    x = xWall;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
