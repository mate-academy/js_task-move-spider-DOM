'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();
  const borderWidth = parseFloat(getComputedStyle(wall).borderWidth);
  const wallRightBorder = wall.clientWidth - spider.offsetWidth;
  const wallBottomBorder = wall.clientHeight - spider.offsetHeight;

  const spiderCoords = {
    left: e.x - borderWidth - (spider.offsetWidth / 2)
    - wallCoords.left,
    top: e.y - borderWidth - (spider.offsetHeight / 2)
    - wallCoords.top,
  };

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left > wallRightBorder) {
    spiderCoords.left = wallRightBorder;
  }

  if (spiderCoords.top > wallBottomBorder) {
    spiderCoords.top = wallBottomBorder;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
});
