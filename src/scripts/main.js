'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  if (e.target === spider) {
    return;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;
  let moveX = e.offsetX - spider.width / 2;
  let moveY = e.offsetY - spider.height / 2;

  if (moveX < 0) {
    moveX = 0;
  };

  if (moveY < 0) {
    moveY = 0;
  };

  if (moveX > maxX) {
    moveX = maxX;
  };

  if (moveY > maxY) {
    moveY = maxY;
  };

  spider.style.left = moveX + 'px';
  spider.style.top = moveY + 'px';
});
