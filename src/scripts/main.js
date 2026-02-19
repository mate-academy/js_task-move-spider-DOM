'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!wall || !spider) {
    return;
  }

  const wallPos = wall.getBoundingClientRect();

  if (
    e.clientX < wallPos.left ||
    e.clientX > wallPos.right ||
    e.clientY < wallPos.top ||
    e.clientY > wallPos.bottom
  ) {
    return;
  }

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  let left = e.clientX - wallPos.left - spider.offsetWidth / 2 - borderLeft;
  let topPos = e.clientY - wallPos.top - spider.offsetHeight / 2 - borderTop;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  if (left < 0) {
    left = 0;
  }

  if (left > maxLeft) {
    left = maxLeft;
  }

  if (topPos < 0) {
    topPos = 0;
  }

  if (topPos > maxTop) {
    topPos = maxTop;
  }
  spider.style.left = left + 'px';
  spider.style.top = topPos + 'px';
});
