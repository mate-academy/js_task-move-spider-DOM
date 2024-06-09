'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;
  const wallBorder = parseInt(window.getComputedStyle(wall).borderWidth);

  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  const newSpiderY = e.clientY - wallRect.y - wallBorder - spiderHeight / 2;
  const newSpiderX = e.clientX - wallRect.x - wallBorder - spiderWidth / 2;

  spider.style.top = `${Math.min(Math.max(newSpiderY, 0), wallHeight - spiderHeight)}px`;
  spider.style.left = `${Math.min(Math.max(newSpiderX, 0), wallWidth - spiderWidth)}px`;
});
