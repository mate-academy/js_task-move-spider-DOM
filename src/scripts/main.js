'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall !== e.target) {
    return;
  }

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const halfSpiderWidth = spider.offsetWidth / 2;

  let spiderY = e.offsetY - halfSpiderWidth;
  let spiderX = e.offsetX - halfSpiderWidth;

  if (spiderY < 0) {
    spiderY = 0;
  } else if (spiderY > wallHeight - halfSpiderWidth) {
    spiderY = wallHeight - halfSpiderWidth * 2;
  }

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX > wallWidth - halfSpiderWidth) {
    spiderX = wallWidth - halfSpiderWidth * 2;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
