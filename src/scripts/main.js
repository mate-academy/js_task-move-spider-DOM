'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();

  const wallStyles = window.getComputedStyle(wall);
  const borderLeft = parseFloat(wallStyles.borderLeftWidth);
  const borderTop = parseFloat(wallStyles.borderTopWidth);

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let x = e.clientX - wallRect.left - borderLeft;
  let y = e.clientY - wallRect.top - borderTop;

  x = Math.max(
    spiderHalfWidth,
    Math.min(x, wall.clientWidth - spiderHalfWidth),
  );

  y = Math.max(
    spiderHalfHeight,
    Math.min(y, wall.clientHeight - spiderHalfHeight),
  );

  spider.style.left = `${x - spiderHalfWidth}px`;
  spider.style.top = `${y - spiderHalfHeight}px`;
});
