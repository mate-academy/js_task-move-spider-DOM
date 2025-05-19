'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();
  const wallX = wallCoords.x;
  const wallY = wallCoords.y;
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallBorder = parseInt(getComputedStyle(wall).borderWidth, 10);

  wall.style.position = 'relative';
  spider.style.position = 'absolute';

  if (e.target !== wall) {
    return;
  }

  const spiderLeft = e.clientX - wallX - wallBorder - spiderWidth / 2;
  const spiderTop = e.clientY - wallY - wallBorder - spiderHeight / 2;
  const left = Math.max(0, Math.min(spiderLeft, wallWidth - spiderWidth));
  const topMargin = Math.max(0, Math.min(spiderTop, wallHeight - spiderHeight));

  spider.style.left = `${left}px`;
  spider.style.top = `${topMargin}px`;
});
