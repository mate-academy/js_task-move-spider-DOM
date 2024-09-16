'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const wallX = wall.clientWidth;
  const wallY = wall.clientHeight;
  const spiderX = spider.offsetWidth;
  const spiderY = spider.offsetHeight;

  let x = e.offsetX - spiderX / 2;
  let y = e.offsetY - spiderY / 2;

  x = Math.max(0, Math.min(x, wallX - spiderX));
  y = Math.max(0, Math.min(y, wallY - spiderY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
