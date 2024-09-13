'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.pointerEvents = 'none';

function getPosition({ x, y }) {
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const leftIndent = wall.offsetLeft + wall.clientLeft;
  const topIndent = wall.offsetTop + wall.clientTop;
  const leftBoundary = leftIndent + spiderWidth / 2;
  const topBoundary = topIndent + spiderHeight / 2;
  const rightBoundary = leftIndent + wall.clientWidth - spiderWidth / 2;
  const bottomBoundary = topIndent + wall.clientHeight - spiderHeight / 2;

  const leftPosition =
    Math.min(Math.max(x, leftBoundary), rightBoundary) - leftBoundary;

  const topPosition =
    Math.min(Math.max(y, topBoundary), bottomBoundary) - topBoundary;

  return { leftPosition, topPosition };
}

document.addEventListener('click', (e) => {
  if (e.target === wall) {
    const coordinates = getPosition({ x: e.clientX, y: e.clientY });

    spider.style.left = `${coordinates.leftPosition}px`;
    spider.style.top = `${coordinates.topPosition}px`;
  }
});
