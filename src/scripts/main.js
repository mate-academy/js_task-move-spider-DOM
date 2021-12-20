'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) {
    return;
  }

  let y = e.clientY - wall.offsetTop - wall.clientTop - spider.offsetHeight / 2;
  let x = e.clientX - wall.offsetLeft
  - wall.clientLeft - spider.offsetWidth / 2;

  if (y < 0) {
    y = 0;
  }

  if (y > wall.clientHeight - spider.clientHeight) {
    y = wall.clientHeight - spider.clientHeight;
  }

  if (x < 0) {
    x = 0;
  }

  if (x > wall.clientWidth - spider.clientWidth) {
    x = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
