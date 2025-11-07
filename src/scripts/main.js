'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const wallStyle = window.getComputedStyle(wall);

  const borderLeftWidth = parseFloat(wallStyle.borderLeftWidth);
  const borderTopWidth = parseFloat(wallStyle.borderTopWidth);

  const left = wallRect.left + borderLeftWidth;
  const top1 = wallRect.top + borderTopWidth;

  if (!wall.contains(e.target)) {
    return;
  }

  const insideWidth = wall.clientWidth;
  const insideHeight = wall.clientHeight;

  const desiredX = e.clientX - left - spider.clientWidth / 2;
  const desiredY = e.clientY - top1 - spider.clientHeight / 2;

  const finalX = Math.max(
    0,
    Math.min(desiredX, insideWidth - spider.clientWidth),
  );

  const finalY = Math.max(
    0,
    Math.min(desiredY, insideHeight - spider.clientHeight),
  );

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
