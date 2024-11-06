'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const fieldWall = wall.getBoundingClientRect();

  let topp =
    e.clientY - fieldWall.top - wall.clientTop - spider.clientHeight / 2;
  let left =
    e.clientX - fieldWall.left - wall.clientLeft - spider.clientWidth / 2;

  if (topp < 0) {
    topp = 0;
  }

  if (left < 0) {
    left = 0;
  }

  if (left + spider.clientWidth > fieldWall.width) {
    left = wall.clientWidth - spider.clientWidth;
  }

  if (topp + spider.clientHeight > fieldWall.height) {
    topp = wall.clientHeight - spider.clientHeight;
  }

  spider.style.top = topp + 'px';
  spider.style.left = left + 'px';
});
