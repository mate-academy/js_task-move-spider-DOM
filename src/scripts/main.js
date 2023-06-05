'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  let spiderCoordY = e.clientY
  - wall.offsetTop - wall.clientTop - spider.clientHeight / 2;
  let spiderCoordX = e.clientX
  - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2;

  spiderCoordY = Math.max(0, Math.min(maxTop, spiderCoordY));
  spiderCoordX = Math.max(0, Math.min(maxLeft, spiderCoordX));

  spider.style.top = spiderCoordY + 'px';
  spider.style.left = spiderCoordX + 'px';
});
