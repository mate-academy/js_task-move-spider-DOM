'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

const wallWidth = wallEl.clientWidth;
const wallHeight = wallEl.clientHeight;

const spiderWidth = spiderEl.clientWidth;
const spiderHeight = spiderEl.clientHeight;

wallEl.addEventListener('click', (e) => {
  const wallRect = wallEl.getBoundingClientRect();
  const wallLeft = wallRect.left + wallEl.clientLeft;
  const wallTop = wallRect.top + wallEl.clientTop;

  const clickX = e.clientX;
  const clickY = e.clientY;

  const targetLeft = clickX - wallLeft - spiderWidth / 2;
  const targetTop = clickY - wallTop - spiderHeight / 2;

  const maxLeft = wallWidth - spiderWidth;
  const maxTop = wallHeight - spiderHeight;

  const clampedLeft = Math.min(Math.max(targetLeft, 0), maxLeft);
  const clampedTop = Math.min(Math.max(targetTop, 0), maxTop);

  spiderEl.style.left = `${clampedLeft}px`;
  spiderEl.style.top = `${clampedTop}px`;
});
