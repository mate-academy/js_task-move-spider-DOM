'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';
spider.style.left = '0px';
spider.style.top = '0px';

wall.addEventListener('click', (evt) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = evt.clientX - wallRect.left - spiderWidth / 2;
  let y = evt.clientY - wallRect.top - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
