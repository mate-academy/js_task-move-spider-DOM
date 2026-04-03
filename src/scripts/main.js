'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  // get height and width spidder
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  // get rect wall
  const wallRect = wall.getBoundingClientRect();

  // get position wall without border
  const positionWallX = wallRect.x + wall.clientLeft;
  const positionWallY = wallRect.y + wall.clientTop;

  // calculite target for center spider
  let targetX = e.clientX - positionWallX - spiderWidth / 2;
  let targetY = e.clientY - positionWallY - spiderHeight / 2;

  // min max
  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  targetX = Math.min(targetX, maxX);
  targetY = Math.min(targetY, maxY);

  targetX = Math.max(targetX, 0);
  targetY = Math.max(targetY, 0);

  // set spider position
  spider.style.left = targetX + 'px';
  spider.style.top = targetY + 'px';
});
