'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const { width: wallWidth, height: wallHeight } = wall.getBoundingClientRect();

  const wallStyles = getComputedStyle(wall);
  const wallBorderRight = parseFloat(wallStyles.borderRightWidth);
  const wallBorderLeft = parseFloat(wallStyles.borderLeftWidth);
  const wallBorderBottom = parseFloat(wallStyles.borderBottomWidth);
  const wallBorderTop = parseFloat(wallStyles.borderTopWidth);
  const wallBorderX = wallBorderLeft + wallBorderRight;
  const wallBorderY = wallBorderTop + wallBorderBottom;

  const minX = wall.offsetLeft;
  const maxX =
    wall.offsetLeft + wallWidth - wallBorderRight - spider.offsetWidth;
  const minY = wall.offsetTop;
  const maxY =
    wall.offsetTop + wallHeight - wallBorderBottom - spider.offsetHeight;

  let spiderY = Math.round(
    e.clientY - minY - spider.offsetWidth / 2 - wallBorderTop,
  );
  let spiderX = Math.round(
    e.clientX - minX - spider.offsetHeight / 2 - wallBorderLeft,
  );

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (e.clientY > maxY) {
    spiderY = Math.round(wallHeight - spider.offsetHeight - wallBorderY);
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (e.clientX > maxX) {
    spiderX = Math.round(wallWidth - spider.offsetWidth - wallBorderX);
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
