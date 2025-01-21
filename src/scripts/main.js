'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const posX = e.clientX - wallRect.left;
  const posY = e.clientY - wallRect.top;

  const movbleW = spider.offsetWidth;
  const movbleH = spider.offsetHeight;

  const newX = Math.min(
    Math.max(posX - movbleW / 2, 0),
    wall.offsetWidth - movbleW,
  );
  const newY = Math.min(
    Math.max(posY - movbleH / 2, 0),
    wall.offsetHeight - movbleH,
  );

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
