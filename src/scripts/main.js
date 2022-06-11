'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderCenter = spider.offsetHeight / 2;

  const lengthFromBorderToCursorX
    = e.clientX - wall.offsetLeft - wall.clientLeft;
  const lengthFromBorderToCursorY = e.clientY - wall.offsetTop - wall.clientTop;
  const maxDistanceBottom
    = wall.offsetTop + wall.clientTop + wall.clientHeight - spiderCenter;
  const maxDistanceTop = wall.offsetTop + wall.clientTop + spiderCenter;
  const maxDistanceLeft = wall.offsetLeft + wall.clientLeft + spiderCenter;
  const maxDistanceRight
    = wall.offsetLeft + wall.clientLeft + wall.clientWidth - spiderCenter;

  if (e.target === wall) {
    spider.style.top = `${lengthFromBorderToCursorY - spiderCenter}px`;
    spider.style.left = `${lengthFromBorderToCursorX - spiderCenter}px`;

    if (e.clientY > maxDistanceBottom) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    } else if (e.clientY < maxDistanceTop) {
      spider.style.top = `${0}px`;
    }

    if (e.clientX < maxDistanceLeft) {
      spider.style.left = `${0}px`;
    } else if (e.clientX > maxDistanceRight) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    }
  }
});
