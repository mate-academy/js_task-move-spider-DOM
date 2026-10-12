'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const moveLeft =
    e.clientX - wallRect.left - wall.clientLeft - spider.offsetWidth / 2;
  const moveTop =
    e.clientY - wallRect.top - wall.clientTop - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const boundedLeft = Math.max(0, Math.min(moveLeft, maxLeft));

  const maxTop = wall.clientHeight - spider.offsetHeight;
  const boundedTop = Math.max(0, Math.min(moveTop, maxTop));

  spider.style.left = boundedLeft + 'px';
  spider.style.top = boundedTop + 'px';
});
