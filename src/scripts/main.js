'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let newLeft = e.offsetX - spiderWidth / 2;
  let newTop = e.offsetY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallWidth - spiderWidth));
  newTop = Math.max(0, Math.min(newTop, wallHeight - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
