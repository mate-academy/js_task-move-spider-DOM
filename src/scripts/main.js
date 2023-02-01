'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  };

  let x = e.offsetX - spider.height / 2;
  let y = e.offsetY - spider.width / 2;
  const height = wall.clientHeight - spider.height;
  const width = wall.clientWidth - spider.width;

  if (x < 0) {
    x = 0;
  };

  if (y < 0) {
    y = 0;
  }

  if (x > height) {
    x = height;
  }

  if (y > width) {
    y = width;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
