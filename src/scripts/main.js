'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderWith = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallRect = wall.getBoundingClientRect();

  const y = e.clientY;
  const x = e.clientX;

  let left = x - wallRect.left - spiderWith / 2;
  let to = y - wallRect.top - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wallRect.width - spiderWith - 20));
  to = Math.max(0, Math.min(to, wallRect.height - spiderHeight - 20));

  spider.style.left = left + 'px';
  spider.style.top = to + 'px';
});
