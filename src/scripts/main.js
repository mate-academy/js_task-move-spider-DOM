'use strict';

const wall = document.querySelector('.wall ');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rectWall = wall.getBoundingClientRect();
  const borderSize = 10;
  const wallWidth = rectWall.width - 2 * borderSize;
  const wallHeight = rectWall.height - 2 * borderSize;

  const x = e.offsetX - (spider.offsetWidth / 2);
  const y = e.offsetY - (spider.offsetHeight / 2);

  const newX = Math.max(0, Math.min(x, wallWidth - spider.offsetWidth));
  const newY = Math.max(0, Math.min(y, wallHeight - spider.offsetHeight));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
