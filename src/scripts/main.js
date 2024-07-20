'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallBorderWidth = Number.parseFloat(getComputedStyle(wall).borderWidth);
const defaultOffsetX =
  wall.getBoundingClientRect().left + wallBorderWidth + spider.width / 2;
const defaultOffsetY =
  wall.getBoundingClientRect().top + wallBorderWidth + spider.height / 2;
const maxX = wall.clientWidth - spider.clientWidth;
const maxY = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }
  spider.style.left = getPosition(e.clientX, defaultOffsetX, maxX) + 'px';
  spider.style.top = getPosition(e.clientY, defaultOffsetY, maxY) + 'px';
});

function getPosition(currentPos, defOffset, maxPos) {
  const position = currentPos - defOffset;

  if (position < 0) {
    return 0;
  }

  if (position > maxPos) {
    return maxPos;
  }

  return position;
}
