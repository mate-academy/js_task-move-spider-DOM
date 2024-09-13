'use strict';

const wall = document.body.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.pointerEvents = 'none';

function getPosition(clickCoordinates) {
  const { x, y } = clickCoordinates;

  const coordinates = {
    left: 0,
    top: 0,
  };

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;
  const leftIndent = wall.offsetLeft + wall.clientLeft;
  const topIndent = wall.offsetTop + wall.clientTop;
  const leftBoundary = leftIndent + spiderWidth / 2;
  const topBoundary = topIndent + spiderHeight / 2;
  const rightBoundary = leftIndent + wall.clientWidth - spiderWidth / 2;
  const bottomBoundary = topIndent + wall.clientHeight - spiderHeight / 2;

  if (x > leftBoundary && x <= rightBoundary) {
    coordinates.left = x - leftIndent - spiderWidth / 2;
  }

  if (x > rightBoundary) {
    coordinates.left = wall.clientWidth - spiderWidth;
  }

  if (y > topBoundary && y <= bottomBoundary) {
    coordinates.top = y - topIndent - spiderHeight / 2;
  }

  if (y > bottomBoundary) {
    coordinates.top = wall.clientHeight - spiderHeight;
  }

  return coordinates;
}

document.addEventListener('click', (e) => {
  if (e.target === wall) {
    const coordinates = {
      x: e.clientX,
      y: e.clientY,
    };

    spider.style.left = `${getPosition(coordinates).left}px`;
    spider.style.top = `${getPosition(coordinates).top}px`;
  }
});
