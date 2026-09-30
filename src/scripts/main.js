'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const elem = e.target.closest('.wall');

  if (!elem) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallCoordsX = wall.getBoundingClientRect().x + wall.clientLeft;
  const wallCoordsY = wall.getBoundingClientRect().y + wall.clientTop;
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;
  const minX = 0;
  const minY = 0;
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;
  let x = e.clientX - wallCoordsX - spiderWidth / 2;
  let y = e.clientY - wallCoordsY - spiderHeight / 2;

  x = Math.min(Math.max(x, minX), maxX);
  y = Math.min(Math.max(y, minY), maxY);

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
