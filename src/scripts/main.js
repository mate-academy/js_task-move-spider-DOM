'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const boundaries = wall.getBoundingClientRect();

  const clickX = e.clientX - boundaries.left - wall.clientLeft;
  const clickY = e.clientY - boundaries.top - wall.clientTop;

  const spiderRadiusX = spider.offsetWidth / 2;
  const spiderRadiusY = spider.offsetHeight / 2;

  const minX = spiderRadiusX;
  const minY = spiderRadiusY;

  const maxX = wall.clientWidth - spiderRadiusX;
  const maxY = wall.clientHeight - spiderRadiusY;

  const finalX = Math.max(minX, Math.min(clickX, maxX));
  const finalY = Math.max(minY, Math.min(clickY, maxY));

  spider.style.top = `${finalY}px`;
  spider.style.left = `${finalX}px`;

  spider.style.transform = 'translate(-50%, -50%)';
});
