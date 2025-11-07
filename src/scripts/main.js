'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderWidth = spider.offsetWidth;
const spiderHeight = spider.offsetHeight;

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  let targetX = e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;
  let targetY = e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  targetX = Math.min(Math.max(0, targetX), maxX);
  targetY = Math.min(Math.max(0, targetY), maxY);

  spider.style.left = targetX + 'px';
  spider.style.top = targetY + 'px';
});
