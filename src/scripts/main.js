'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.offsetX - spiderWidth / 2;
  let y = e.offsetY - spiderHeight / 2;

  x = Math.max(0, Math.min(x, wallWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wallHeight - spiderHeight));

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
