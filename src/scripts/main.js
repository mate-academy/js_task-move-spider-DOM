'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallMaxX = wall.clientWidth - spider.clientWidth;
  const wallMaxY = wall.clientHeight - spider.clientWidth;

  if (!wall.contains(e.target)) {
    return;
  }

  let spiderX = e.offsetX - spider.clientWidth / 2;
  let spiderY = e.offsetY - spider.clientWidth / 2;

  if (spiderX > wallMaxX) {
    spiderX = wallMaxX;
  } else if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY > wallMaxY) {
    spiderY = wallMaxX;
  } else if (spiderY < 0) {
    spiderY = 0;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
