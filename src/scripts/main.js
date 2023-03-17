'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.className !== 'wall') {
    return;
  }

  let spiderY = e.offsetY - spider.clientHeight / 2;
  let spiderX = e.offsetX - spider.clientWidth / 2;

  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;

  if (spiderY < 0) {
    spiderY = 0;
  }

  if (maxY < spiderY) {
    spiderY = maxY;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (maxX < spiderX) {
    spiderX = maxX;
  }

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});
