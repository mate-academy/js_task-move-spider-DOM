'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  let x = clickX - spider.offsetWidth / 2;
  let y = clickY - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  if (x < 0) {
    x = 0;
  }

  if (x > maxLeft) {
    x = maxLeft;
  }

  if (y < 0) {
    y = 0;
  }

  if (y > maxTop) {
    y = maxTop;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
