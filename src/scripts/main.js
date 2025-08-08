'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const borderLeft = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const borderTop = parseFloat(getComputedStyle(wall).borderTopWidth);
  const borderRight = parseFloat(getComputedStyle(wall).borderRightWidth);
  const borderBottom = parseFloat(getComputedStyle(wall).borderBottomWidth);

  let x = e.clientX - wallRect.left - spiderRect.width / 2 - borderLeft;
  let y = e.clientY - wallRect.top - spiderRect.height / 2 - borderTop;

  const maxX = wallRect.width - spiderRect.width - borderLeft - borderRight;
  const maxY = wallRect.height - spiderRect.height - borderTop - borderBottom;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
