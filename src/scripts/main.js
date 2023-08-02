'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();
  const scrollLeft = document.documentElement.scrollLeft;
  const scrollTop = document.documentElement.scrollTop;
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);

  const newX = e.clientX + scrollLeft - wallRect.left - spiderRect.width / 2
    - wallBorder;
  const newY = e.clientY + scrollTop - wallRect.top - spiderRect.height / 2
    - wallBorder;

  const maxX = wallRect.width - 2 * wallBorder - spiderRect.width;
  const maxY = wallRect.height - 2 * wallBorder - spiderRect.height;
  const finalX = Math.max(0, Math.min(newX, maxX));
  const finalY = Math.max(0, Math.min(newY, maxY));

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
