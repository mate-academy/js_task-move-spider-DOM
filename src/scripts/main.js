'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  const x = e.clientX - wall.offsetLeft
  - wall.clientLeft - (spider.clientWidth / 2);
  const y = e.clientY - wall.offsetTop
  - wall.clientTop - (spider.clientHeight / 2);

  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;

  let finalX = Math.min(maxX, x);

  finalX = Math.max(0, finalX);

  let finalY = Math.max(0, y);

  finalY = Math.min(maxY, finalY);

  spider.style.top = `${finalY}px`;
  spider.style.left = `${finalX}px`;
});
