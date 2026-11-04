'use strict';

const spider = document.querySelector('img.spider');
const centerOfSpider = spider.offsetHeight / 2;

document.querySelector('body div.wall').addEventListener('click', (e) => {
  const wall = e.currentTarget;

  const localCoordStartX = wall.offsetLeft + wall.clientLeft;
  const endX = wall.offsetLeft + wall.clientLeft + wall.clientWidth;

  const startY = wall.offsetTop + wall.clientTop;
  const endY = wall.offsetTop + wall.clientTop + wall.clientHeight;

  const localClickCoordX = () => {
    return e.clientX - centerOfSpider - localCoordStartX;
  };

  const localClickCoordY = () => {
    return e.clientY - centerOfSpider - startY;
  };

  const coordToCSSValue = (coord) => {
    return coord + 'px';
  };

  // Moving spider

  // By X coordinate
  if (localClickCoordX() + localCoordStartX < localCoordStartX + centerOfSpider) {
    spider.style.left = coordToCSSValue(0);
  } else if (localClickCoordX() + localCoordStartX > endX - spider.offsetHeight) {
    spider.style.left = coordToCSSValue(wall.clientWidth - spider.offsetHeight);
  } else {
    spider.style.left = coordToCSSValue(localClickCoordX());
  }

  // By Y coordinate
  if (localClickCoordY() + startY < startY + centerOfSpider) {
    spider.style.top = coordToCSSValue(0);
  } else if (localClickCoordY() + startY > endY - spider.offsetHeight) {
    spider.style.top = coordToCSSValue(wall.clientHeight - spider.offsetHeight);
  } else {
    spider.style.top = coordToCSSValue(localClickCoordY());
  }
});
