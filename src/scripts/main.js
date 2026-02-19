'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let x = e.clientX - wallRect.left - wall.clientLeft - spider.clientWidth / 2;

  let y = e.clientY - wallRect.top - wall.clientTop - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});

// const wallPos = wall.getBoundingClientRect();

// if (
//   e.clientX < wallPos.left ||
//   e.clientX > wallPos.right ||
//   e.clientY < wallPos.top ||
//   e.clientY > wallPos.bottom
// ) {
//   return;

// const borderLeft = wall.clientLeft;
// const borderTop = wall.clientTop;

// let left = e.clientX - wallPos.left - spider.offsetWidth / 2 - borderLeft;
// let topPos = e.clientY - wallPos.top - spider.offsetHeight / 2 - borderTop;

// const maxLeft = wall.offsetWidth - spider.offsetWidth;
// const maxTop = wall.offsetHeight - spider.offsetHeight;

// if (left < 0) {
//   left = 0;
// }

// if (left > maxLeft) {
//   left = maxLeft;
// }

// if (topPos < 0) {
//   topPos = 0;
// }

// if (topPos > maxTop) {
//   topPos = maxTop;
// }
// spider.style.left = left + 'px';
// spider.style.top = topPos + 'px';
