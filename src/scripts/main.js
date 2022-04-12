'use strict';

document.addEventListener('click', e => {
  const item = e.target;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  let y = e.offsetY - spider.clientWidth / 2;
  let x = e.offsetX - spider.clientHeight / 2;

  const yWall = wall.clientHeight - spider.clientHeight;
  const xWall = wall.clientWidth - spider.clientWidth;

  if (x > xWall) {
    x = xWall;
  }

  if (y > yWall) {
    y = yWall;
  }

  if (y < 0) {
    y = 0;
  }

  if (x < 0) {
    x = 0;
  }

  if (!item.classList.contains('wall')) {
    return;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
