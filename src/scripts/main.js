'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');

  const wall = document.querySelector('.wall');

  const coordWall = wall.getBoundingClientRect();

  let left1 = e.clientX - coordWall.left - wall.clientLeft - spider.width / 2;
  let top1 = e.clientY - coordWall.top - wall.clientTop - spider.height / 2;

  if (e.clientX > coordWall.right
    || e.clientX < coordWall.left
    || e.clientY > coordWall.bottom
    || e.clientY < coordWall.top) {
    return;
  }

  if (left1 + spider.width > wall.clientWidth) {
    left1 = wall.clientWidth - spider.width;
  } else if (left1 < 0) {
    left1 = 0;
  };

  if (top1 + spider.height > wall.clientHeight) {
    top1 = wall.clientHeight - spider.height;
  } else if (top1 < 0) {
    top1 = 0;
  };

  spider.style.left = left1 + 'px';
  spider.style.top = top1 + 'px';
});
