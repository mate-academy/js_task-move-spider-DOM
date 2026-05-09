'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wallEl.getBoundingClientRect();

  const x = e.clientX - wallRect.left - wallEl.clientLeft;
  const y = e.clientY - wallRect.top - wallEl.clientTop;

  const maxLeft = wallEl.clientWidth - spiderEl.clientWidth;
  const maxTop = wallEl.clientHeight - spiderEl.clientHeight;

  const clampedX = Math.max(0, Math.min(x - spiderEl.clientWidth / 2, maxLeft));
  const clampedY = Math.max(0, Math.min(y - spiderEl.clientHeight / 2, maxTop));

  spiderEl.style.left = clampedX + 'px';
  spiderEl.style.top = clampedY + 'px';
});
