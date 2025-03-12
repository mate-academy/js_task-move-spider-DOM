'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const wallTop = wall.offsetTop;
const wallLeft = wall.offsetLeft;

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  let spiderX = x - wallLeft - spiderWidth / 2;
  let spiderY = y - wallTop - spiderHeight / 2;

  spiderX = Math.max(0, Math.min(spiderX, wallWidth - spiderWidth));
  spiderY = Math.max(0, Math.min(spiderY, wallHeight - spiderHeight));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
