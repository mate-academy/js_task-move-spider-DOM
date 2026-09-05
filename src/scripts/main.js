'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  const desiredLeft = clickX - spider.offsetWidth / 2;
  const desiredTop = clickY - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  const finalLeft = Math.max(0, Math.min(desiredLeft, maxLeft));
  const finalTop = Math.max(0, Math.min(desiredTop, maxTop));

  spider.style.left = finalLeft + 'px';
  spider.style.top = finalTop + 'px';
});
