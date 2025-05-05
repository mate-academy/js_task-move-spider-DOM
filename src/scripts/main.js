'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');

  if (!spider) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const style = getComputedStyle(wall);

  const borderLeft = parseFloat(style.borderLeftWidth);
  const borderTop = parseFloat(style.borderTopWidth);
  const borderRight = parseFloat(style.borderRightWidth);
  const borderBottom = parseFloat(style.borderBottomWidth);

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let x = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let y = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  const contentWidth = wallRect.width - borderLeft - borderRight;
  const contentHeight = wallRect.height - borderTop - borderBottom;

  x = Math.max(0, Math.min(x, contentWidth - spiderWidth));
  y = Math.max(0, Math.min(y, contentHeight - spiderHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
