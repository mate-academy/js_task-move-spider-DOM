'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const leftBorder = wall.offsetLeft + wall.clientLeft;
  const topBorder = wall.offsetTop + wall.clientTop;

  let newLeft = e.clientX - leftBorder - spider.clientWidth / 2;
  let newTop = e.clientY - topBorder - spider.clientHeight / 2;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > wall.clientWidth - spider.clientWidth) {
    newLeft = wall.clientWidth - spider.clientWidth;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > wall.clientHeight - spider.clientHeight) {
    newTop = wall.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
