'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const rect = wall.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;
  const relativeX = clickX - rect.left;
  const relativeY = clickY - rect.top;
  const desiredLeft = relativeX - spider.offsetWidth / 2;
  const desiredTop = relativeY - spider.offsetHeight / 2;
  const minLeft = 0;
  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const minTop = 0;
  const maxTop = wall.clientHeight - spider.offsetHeight;
  const left = Math.max(minLeft, Math.min(desiredLeft, maxLeft));
  const up = Math.max(minTop, Math.min(desiredTop, maxTop));

  spider.style.left = left + 'px';
  spider.style.top = up + 'px';
});
