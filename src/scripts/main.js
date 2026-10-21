'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  let newLeft =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let newTop =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > maxLeft) {
    newLeft = maxLeft;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > maxTop) {
    newTop = maxTop;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
