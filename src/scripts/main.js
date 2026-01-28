'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  let width =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  let height =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  if (width < 0) {
    width = 0;
  }

  if (height < 0) {
    height = 0;
  }

  if (width > maxLeft) {
    width = maxLeft;
  }

  if (height > maxTop) {
    height = maxTop;
  }

  spider.style.left = `${width}px`;
  spider.style.top = `${height}px`;
});
