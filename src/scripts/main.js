'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', event => {
  let left = event.clientX - wall.offsetLeft
    - wall.clientLeft - spider.clientWidth / 2;
  let top = event.clientY - wall.offsetTop
    - wall.clientTop - spider.clientHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (top < 0) {
    top = 0;
  }

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxBottom = wall.clientHeight - spider.clientHeight;

  if (left > maxLeft) {
    left = maxLeft;
  }

  if (top > maxBottom) {
    top = maxBottom;
  }

  spider.style.top = top + 'px';
  spider.style.left = left + 'px';
});
