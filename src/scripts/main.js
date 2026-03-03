'use strict';

document.addEventListener('click', (e) => {
  const wallEl = document.querySelector('.wall');
  const spiderEl = document.querySelector('.spider');

  const wallRect = wallEl.getBoundingClientRect();
  const spiderRect = spiderEl.getBoundingClientRect();

  let targetX = e.clientX - spiderRect.width / 2;
  let targetY = e.clientY - spiderRect.height / 2;

  const minX = wallRect.left;
  const maxX = wallRect.right - spiderRect.width;
  const minY = wallRect.top;
  const maxY = wallRect.bottom - spiderRect.height;

  targetX = Math.min(Math.max(targetX, minX), maxX);
  targetY = Math.min(Math.max(targetY, minY), maxY);

  const leftVal = targetX - wallRect.left;
  const topVal = targetY - wallRect.top;

  spiderEl.style.left = `${leftVal}px`;
  spiderEl.style.top = `${topVal}px`;
});
