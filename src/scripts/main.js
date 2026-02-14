// @ts-nocheck
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  const wallClick = e.target.closest('.wall');

  if (!wallClick) {
    return;
  }

  const border = wall.clientTop;
  const halfSpiderWidth = spiderSize.width / 2;
  const halfSpiderHeight = spiderSize.height / 2;

  let positionX = e.clientX - wallSize.left - halfSpiderWidth - border;
  let positionY = e.clientY - wallSize.top - halfSpiderHeight - border;

  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  const maxX = wallSize.width - border * 2 - spiderSize.width;
  const maxY = wallSize.height - border * 2 - spiderSize.height;

  positionX = clamp(positionX, 0, maxX);
  positionY = clamp(positionY, 0, maxY);

  spider.style.left = `${positionX}px`;
  spider.style.top = `${positionY}px`;
});
