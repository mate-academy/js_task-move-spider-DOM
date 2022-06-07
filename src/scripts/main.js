'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  let spiderX = e.offsetX - (spider.offsetWidth / 2);
  let spiderY = e.offsetY;

  const MaxX = wall.clientWidth - spider.clientWidth;
  const MaxY = wall.clientHeight - spider.clientHeight;

  if (spiderX > MaxX) {
    spiderX = MaxX;
  }

  if (spiderY > MaxY) {
    spiderY = MaxY;
  }

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';
});
