'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', e => {
  let yCoords = e.offsetY - (spiderHeight / 2);
  let xCoords = e.offsetX - (spiderHeight / 2);

  const yLimit = wallWidth - spiderHeight;
  const xLimit = wallHeight - spiderWidth;

  xCoords = Math.max(0, xCoords);
  xCoords = Math.min(xLimit, xCoords);
  yCoords = Math.max(0, yCoords);
  yCoords = Math.min(yLimit, yCoords);

  spider.style.top = `${yCoords}px`;
  spider.style.left = `${xCoords}px`;
});
