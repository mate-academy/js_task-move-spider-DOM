'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const clickX = e.offsetX;
  const clickY = e.offsetY;

  const maxX = wallWidth - spiderWidth;
  const maxY = wallHeight - spiderHeight;

  const newX = Math.max(0, Math.min(clickX - spiderWidth / 2, maxX));
  const newY = Math.max(0, Math.min(clickY - spiderHeight / 2, maxY));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
