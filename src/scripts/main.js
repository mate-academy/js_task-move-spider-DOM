'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallPosition = wall.getBoundingClientRect();
  const wallStyles = getComputedStyle(wall);
  const borderLeft = parseFloat(wallStyles.borderLeftWidth);
  const borderTop = parseFloat(wallStyles.borderTopWidth);
  const isInsidWall =
    e.clientX >= wallPosition.left + borderLeft &&
    e.clientX <= wallPosition.right - borderLeft &&
    e.clientY >= wallPosition.top + borderTop &&
    e.clientY <= wallPosition.bottom - borderTop;

  if (!isInsidWall) {
    return;
  }

  const clickXInsideWall = e.clientX - wallPosition.left - borderLeft;
  const clickYInsideWall = e.clientY - wallPosition.top - borderTop;
  const inneWidth = wall.clientWidth;
  const inneHeight = wall.clientHeight;
  const spiderX = clickXInsideWall - spider.offsetWidth / 2;
  const spiderY = clickYInsideWall - spider.offsetHeight / 2;

  const clampedX = Math.max(
    0,
    Math.min(spiderX, inneWidth - spider.offsetWidth),
  );
  const clampedY = Math.max(
    0,
    Math.min(spiderY, inneHeight - spider.offsetHeight),
  );

  spider.style.left = clampedX + 'px';
  spider.style.top = clampedY + 'px';
});
