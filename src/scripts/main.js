'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', (e) => {
  const maxWidth = wall.clientWidth - spiderWidth;
  const maxHeight = wall.clientHeight - spiderHeight;

  const positionX = e.offsetX - (spiderWidth / 2);
  const positionY = e.offsetY - (spiderHeight / 2);

  const spiderX = Math.max(Math.min(positionX, maxWidth), 0);
  const spiderY = Math.max(Math.min(positionY, maxHeight), 0);

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
