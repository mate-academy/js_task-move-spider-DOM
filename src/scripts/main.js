'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';
spider.style.left = '0px';
spider.style.top = '0px';

wall.addEventListener('click', function (evt) {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let x = evt.clientX - wallRect.left - spiderRect.width / 2;
  let y = evt.clientY - wallRect.top - spiderRect.height / 2;

  const maxX = wallRect.width - spiderRect.width;
  const maxY = wallRect.height - spiderRect.height;

  x = Math.min(Math.max(x, 0), maxX);
  y = Math.min(Math.max(y, 0), maxY);

  spider.style.left = Math.round(x) + 'px';
  spider.style.top = Math.round(y) + 'px';
});
