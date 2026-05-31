'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const wallStyle = getComputedStyle(wall);

  const borderLeft = parseFloat(wallStyle.borderLeftWidth);
  const borderTop = parseFloat(wallStyle.borderTopWidth);
  const borderRight = parseFloat(wallStyle.borderRightWidth);
  const borderBottom = parseFloat(wallStyle.borderBottomWidth);

  const wallInnerWidth = wallRect.width - borderLeft - borderRight;
  const wallInnerHeight = wallRect.height - borderTop - borderBottom;

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let spiderLeft = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let spiderTop = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  spiderLeft = Math.max(0, spiderLeft);
  spiderLeft = Math.min(wallInnerWidth - spiderWidth, spiderLeft);

  spiderTop = Math.max(0, spiderTop);
  spiderTop = Math.min(wallInnerHeight - spiderHeight, spiderTop);

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
