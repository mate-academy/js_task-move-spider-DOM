'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  let leftPos =
    e.clientX - wallRect.left - wall.clientLeft - spider.clientWidth / 2;
  let topPos =
    e.clientY - wallRect.top - wall.clientTop - spider.clientHeight / 2;

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  leftPos = Math.max(0, Math.min(leftPos, maxLeft));
  topPos = Math.max(0, Math.min(topPos, maxTop));

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
