'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallEl = wall.getBoundingClientRect();
  const spiderEl = spider.getBoundingClientRect();

  let x = e.clientX - wallEl.left - wall.clientLeft - spiderEl.width / 2;
  let y = e.clientY - wallEl.top - wall.clientTop - spiderEl.height / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight));

  const leftWall = Math.round(wallEl.left);
  const topWall = Math.round(wallEl.top);
  const rightWall = leftWall + wallEl.width;
  const bottomWall = topWall + wallEl.height;
  const isInside =
    e.clientX > leftWall &&
    e.clientY < rightWall &&
    e.clientY > topWall &&
    e.clientY < bottomWall;

  if (isInside) {
    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
