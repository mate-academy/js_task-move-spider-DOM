'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const wallRect = wall.getBoundingClientRect();

  if (!e.target.matches('.wall')) {
    return;
  }

  const spiderX
    = e.clientX - wallRect.left - wall.clientLeft - (spider.offsetWidth / 2);
  const spiderY
    = e.clientY - wallRect.top - wall.clientTop - (spider.offsetHeight / 2);

  const newX = Math.max(Math.min(spiderX, 350), 0);
  const newY = Math.max(Math.min(spiderY, 350), 0);

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
