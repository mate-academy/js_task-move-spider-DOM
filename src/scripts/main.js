'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', function (evt) {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let x = evt.clientX - wallRect.left - spiderRect.width / 2;
  let y = evt.clientY - wallRect.top - spiderRect.height / 2;

  x = Math.max(0, Math.min(x, wallRect.width - spiderRect.width));
  y = Math.max(0, Math.min(y, wallRect.height - spiderRect.height));

  spider.style.position = 'absolute';
  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
