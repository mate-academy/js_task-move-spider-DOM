'use strict';

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (event.target !== wall && event.target !== spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const spiderW = spiderRect.width;
  const spiderH = spiderRect.height;
  const borderWidth = parseInt(getComputedStyle(wall).borderLeftWidth);

  const clickX = event.clientX - wallRect.left - borderWidth;
  const clickY = event.clientY - wallRect.top - borderWidth;

  const x = Math.min(
    Math.max(clickX - spiderW / 2, 0),
    wallRect.width - spiderW - borderWidth * 2,
  );
  const y = Math.min(
    Math.max(clickY - spiderH / 2, 0),
    wallRect.height - spiderH - borderWidth * 2,
  );

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
