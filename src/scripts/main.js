'use strict';

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x =
    e.clientX -
    wallRect.left -
    (wall.offsetWidth - wall.clientWidth) / 2 -
    spiderWidth / 2;
  let y =
    e.clientY -
    wallRect.top -
    (wall.offsetHeight - wall.clientHeight) / 2 -
    spiderHeight / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
