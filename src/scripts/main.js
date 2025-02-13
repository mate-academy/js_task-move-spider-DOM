'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (wall) {
    const wallOffsetLeft = wall.offsetLeft + wall.clientLeft;
    const wallOffsetTop = wall.offsetTop + wall.clientTop;
    const coorX = e.clientX - wallOffsetLeft - spider.width / 2;
    const coorY = e.clientY - wallOffsetTop - spider.height / 2;
    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    const x = getCoor(coorX, maxX, 0);
    const y = getCoor(coorY, maxY, 0);

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});

function getCoor(coor, max, min) {
  const result = Math.min(Math.max(min, coor), max);

  return result;
}
