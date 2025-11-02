'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const x = e.clientX - wallRect.left - wall.clientLeft;
  const y = e.clientY - wallRect.top - wall.clientTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  let left = x - spiderWidth / 2;
  let topcor = y - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wallWidth - spiderWidth));
  topcor = Math.max(0, Math.min(topcor, wallHeight - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${topcor}px`;
});
