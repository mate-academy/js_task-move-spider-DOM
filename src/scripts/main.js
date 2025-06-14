'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const axisX = e.clientX;
  const axisY = e.clientY;

  const wallRect = wall.getBoundingClientRect();

  const relativeX = axisX - wallRect.left;
  const relativeY = axisY - wallRect.top;

  const centerX = relativeX - spider.clientWidth / 2;
  const centerY = relativeY - spider.clientHeight / 2;

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  const finalX = Math.max(0, Math.min(centerX, maxX));
  const finalY = Math.max(0, Math.min(centerY, maxY));

  spider.style.left = finalX + 'px';
  spider.style.top = finalY + 'px';
});
