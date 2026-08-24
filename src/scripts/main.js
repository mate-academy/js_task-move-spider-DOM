'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const borderL = wall.clientLeft;
  const borderT = wall.clientTop;

  let leftPos = e.clientX - wallRect.left - spider.clientWidth / 2 - borderL;
  let topPos = e.clientY - wallRect.top - spider.clientHeight / 2 - borderT;

  const maxLeft = wallRect.width - spider.clientWidth - borderL * 2;
  const maxTop = wallRect.height - spider.clientHeight - borderT * 2;

  leftPos = Math.max(0, Math.min(leftPos, maxLeft));
  topPos = Math.max(0, Math.min(topPos, maxTop));

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
