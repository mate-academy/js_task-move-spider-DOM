'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  let leftPos =
    e.clientX - wallRect.left - spider.clientWidth / 2 - wall.clientLeft;
  let topPos =
    e.clientY - wallRect.top - spider.clientHeight / 2 - wall.clientTop;

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  leftPos = Math.max(0, Math.min(leftPos, maxLeft));
  topPos = Math.max(0, Math.min(topPos, maxTop));

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
