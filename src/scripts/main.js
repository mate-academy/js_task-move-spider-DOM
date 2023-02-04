'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  let x = e.offsetX - spider.offsetWidth / 2;
  let y = e.offsetY - spider.offsetHeight / 2;

  const wallWidth = wall.clientWidth - spider.offsetWidth;
  const wallHeight = wall.clientHeight - spider.offsetHeight;

  if (x < 0) {
    x = 0;
  }

  if (x > wallWidth) {
    x = wallWidth;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > wallHeight) {
    y = wallHeight;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
