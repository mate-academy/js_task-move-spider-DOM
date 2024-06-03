'use strict';

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const maxX = wall.clientWidth - spider.clientWidth;
  const maxY = wall.clientHeight - spider.clientHeight;

  let spiderX = e.offsetX - spider.clientWidth / 2 || 0;
  let spiderY = e.offsetY - spider.clientHeight / 2 || 0;

  if (spiderX > maxX) {
    spiderX = maxX;
  }

  if (spiderY > maxY) {
    spiderY = maxY;
  }

  if (spiderX < 0) {
    spiderX = 0;
  }

  if (spiderY < 0) {
    spiderY = 0;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
