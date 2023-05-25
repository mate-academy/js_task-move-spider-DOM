'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (!wall || !wall.contains(e.target)) {
    return;
  }

  const spider = document.querySelector('.spider');

  const offsetY = calcOffset(wall.clientHeight, spider.clientHeight, e.offsetY);
  const offsetX = calcOffset(wall.clientWidth, spider.clientWidth, e.offsetX);

  spider.style.top = `${offsetY}px`;
  spider.style.left = `${offsetX}px`;
});

function calcOffset(wallSide, spiderSide, targetOffset) {
  const offset = targetOffset - spiderSide / 2;

  if (offset < 0) {
    return 0;
  }

  const maxOffset = wallSide - spiderSide;

  return offset > maxOffset ? maxOffset : offset;
}
