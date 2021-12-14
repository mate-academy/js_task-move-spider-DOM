'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const item = e.target.closest('.wall');

  if (!item || e.target === spider) {
    return;
  }

  let moveTop = e.offsetY - (spider.clientHeight / 2);
  let moveLeft = e.offsetX - (spider.clientWidth / 2);

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  if (moveTop < 0) {
    moveTop = 0;
  }

  if (moveLeft < 0) {
    moveLeft = 0;
  }

  if (moveTop > maxTop) {
    moveTop = maxTop;
  }

  if (moveLeft > maxLeft) {
    moveLeft = maxLeft;
  }

  spider.style.top = `${moveTop}px`;
  spider.style.left = `${moveLeft}px`;
});
