'use strict';

document.addEventListener('click', (e) => {
  // write code here
  e.preventDefault();

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderCentered = spider.clientWidth / 2;

  let x = e.offsetX - spiderCentered;
  let y = e.offsetY - spiderCentered;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight));

  if (!wall.contains(e.target)) {
    return;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
