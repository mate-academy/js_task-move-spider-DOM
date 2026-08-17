'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const wallStyles = getComputedStyle(wall);

  const borderLeft = parseFloat(wallStyles.borderLeftWidth);
  const borderTop = parseFloat(wallStyles.borderTopWidth);
  const borderRight = parseFloat(wallStyles.borderRightWidth);
  const borderBottom = parseFloat(wallStyles.borderBottomWidth);

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let left = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;

  let y = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  const maxLeft = wallRect.width - borderLeft - borderRight - spiderWidth;

  const maxY = wallRect.height - borderTop - borderBottom - spiderHeight;

  left = Math.max(0, Math.min(left, maxLeft));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${left}px`;
  spider.style.top = `${y}px`;
});
