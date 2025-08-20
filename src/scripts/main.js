'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let x = e.offsetX - spiderWidth / 2;
  let y = e.offsetY - spiderHeight / 2;

  x = Math.max(0, Math.min(x, wallWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wallHeight - spiderHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
