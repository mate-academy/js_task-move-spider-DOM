'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallStyles = getComputedStyle(wall);
  const borderSize = parseFloat(wallStyles.borderWidth);

  const wallHeight = wall.getBoundingClientRect().height;
  const wallWidth = wall.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;
  const spiderWidth = spider.getBoundingClientRect().width;

  const wallRect = wall.getBoundingClientRect();

  const cursorX = e.clientX - wallRect.left;
  const cursorY = e.clientY - wallRect.top;

  let spiderX = cursorX - spiderWidth / 2;
  let spiderY = cursorY - spiderHeight / 2;

  const minX = borderSize;
  const minY = borderSize;
  const maxX = wallWidth - spiderWidth - borderSize;
  const maxY = wallHeight - spiderHeight - borderSize;

  spiderX = Math.max(minX, Math.min(spiderX, maxX));
  spiderY = Math.max(minY, Math.min(spiderY, maxY));

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
