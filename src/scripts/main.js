'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let x = e.clientX - wallRect.left - (spiderWidth / 2);
  let y = e.clientY - wallRect.top - (spiderHeight / 2);

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  x = Math.max(0, Math.min(x, wallWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wallHeight - spiderHeight));

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
  spider.style.transition = `top 0.3s ease, left 0.3s ease`;
});
