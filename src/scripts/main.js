'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let newLeft = e.offsetX - spiderWidth / 2;
  let newTop = e.offsetY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallHeight - spiderHeight));

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
