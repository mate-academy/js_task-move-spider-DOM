'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const field = e.target.closest('.wall');

  if (!field) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderSize = spider.getBoundingClientRect();

  let x = e.clientX - wallRect.left - spiderSize.width / 2;
  let y = e.clientY - wallRect.top - spiderSize.height / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderSize.width));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderSize.height));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
