'use strict';

const spider = document.querySelector('.spider');

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderRect = spider.getBoundingClientRect();
  const wallrRect = wall.getBoundingClientRect();

  const x = e.clientX - wallrRect.left - spiderRect.width / 2;
  const y = e.clientY - wallrRect.top - spiderRect.height / 2;

  const MaxX = wallrRect.width - spiderRect.width;
  const MaxY = wallrRect.height - spiderRect.height;

  const boundX = Math.min(Math.max(0, x), MaxX);
  const boundY = Math.min(Math.max(0, y), MaxY);

  spider.style.left = boundX + 'px';
  spider.style.top = boundY + 'px';
});
