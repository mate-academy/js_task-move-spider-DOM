'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const left = Math.max(0, Math.min(clickX - spider.offsetWidth / 2, maxLeft));

  const topp = Math.max(0, Math.min(clickY - spider.offsetHeight / 2, maxTop));

  spider.style.left = `${left}px`;
  spider.style.top = `${topp}px`;
});
