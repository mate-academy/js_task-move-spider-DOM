'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  let spiderNewX = e.offsetX - spider.clientWidth / 2;
  let spiderNewY = e.offsetY - spider.clientHeight / 2;

  const boundarieX = wall.clientWidth - spider.clientWidth;
  const boundarieY = wall.clientHeight - spider.clientHeight;

  if (spiderNewX < 0) {
    spiderNewX = 0;
  }

  if (spiderNewY < 0) {
    spiderNewY = 0;
  }

  if (spiderNewX > boundarieX) {
    spiderNewX = boundarieX;
  }

  if (spiderNewY > boundarieY) {
    spiderNewY = boundarieY;
  }

  spider.style.top = spiderNewY + 'px';
  spider.style.left = spiderNewX + 'px';
});
