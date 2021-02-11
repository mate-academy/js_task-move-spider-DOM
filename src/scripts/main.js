'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const leftEdge = wall.offsetLeft + wall.clientLeft;
const topEdge = wall.offsetTop + wall.clientTop;
const rightMaxPosition = wall.clientWidth - spider.clientWidth;
const bottomMaxPosition = wall.clientHeight - spider.clientHeight;

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const xPosition = e.clientX - leftEdge - spider.clientWidth / 2;

  const yPosition = e.clientY - topEdge - spider.clientHeight / 2;

  spider.style.left = getFinalSpiderPosition(xPosition, rightMaxPosition)
  + 'px';

  spider.style.top = getFinalSpiderPosition(yPosition, bottomMaxPosition)
  + 'px';
});

function getFinalSpiderPosition(position, maxPosition) {
  if (position < 0) {
    return 0;
  } else if (position > maxPosition) {
    return maxPosition;
  }

  return position;
}
