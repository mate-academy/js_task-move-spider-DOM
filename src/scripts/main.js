'use strict';

const wallEl = document.querySelector('.wall');
const spiderEl = document.querySelector('.spider');

wallEl.addEventListener('click', (e) => {
  if (!wallEl || !spiderEl) {
    return;
  }

  const wallRect = wallEl.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wallEl.clientLeft;
  const clickY = e.clientY - wallRect.top - wallEl.clientTop;

  let targetLeft = clickX - spiderEl.offsetWidth / 2;
  let targetTop = clickY - spiderEl.offsetHeight / 2;

  const maxLeft = wallEl.clientWidth - spiderEl.offsetWidth;
  const maxTop = wallEl.clientHeight - spiderEl.offsetHeight;

  targetLeft = Math.max(0, Math.min(targetLeft, maxLeft));
  targetTop = Math.max(0, Math.min(targetTop, maxTop));

  spiderEl.style.left = `${targetLeft}px`;
  spiderEl.style.top = `${targetTop}px`;
});
