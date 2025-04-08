'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  // Clamp to stay within wall
  x = Math.max(0, Math.min(x, wall.clientWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
