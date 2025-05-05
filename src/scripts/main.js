'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const clickZone = e.target.closest('.wall');

  if (!clickZone) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const borderLeft = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseFloat(getComputedStyle(wall).borderTopWidth);

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let x = e.clientX - wallRect.left - borderLeft - spiderHalfWidth;
  let y = e.clientY - wallRect.top - borderTop - spiderHalfHeight;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
