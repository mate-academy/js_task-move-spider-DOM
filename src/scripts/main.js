'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const topFromWall = wall.offsetTop;
  const leftFromWall = wall.offsetLeft;

  const wallHeight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const borderTop = wall.clientTop;
  const borderLeft = wall.clientLeft;

  const spiderCenter = spider.offsetHeight / 2;
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  const coordX = e.clientX;
  const coordY = e.clientY;

  const lengthFromBorderToCursorX = coordX - leftFromWall - borderLeft;
  const lengthFromBorderToCursorY = coordY - topFromWall - borderTop;
  const maxDistanceBottom = topFromWall + borderTop + wallHeight - spiderCenter;
  const maxDistanceTop = topFromWall + borderTop + spiderCenter;
  const maxDistanceLeft = leftFromWall + borderLeft + spiderCenter;
  const maxDistanceRight = leftFromWall + borderLeft + wallWidth - spiderCenter;

  if (e.target === wall) {
    switch (true) {
      case coordY > maxDistanceBottom:
        spider.style.top = `${wallHeight - spiderHeight}px`;
        spider.style.left = `${lengthFromBorderToCursorX - spiderCenter}px`;

        if (Math.sign(lengthFromBorderToCursorX - spiderCenter) === -1) {
          spider.style.left = `${0}px`;
        }

        if (spider.style.left > `${wallWidth - spiderHeight}px`) {
          spider.style.left = `${wallWidth - spiderHeight}px`;
        }
        break;

      case coordY < maxDistanceTop:
        spider.style.top = `${0}px`;
        spider.style.left = `${lengthFromBorderToCursorX - spiderCenter}px`;

        if (Math.sign(lengthFromBorderToCursorX - spiderCenter) === -1) {
          spider.style.left = `${0}px`;
        }

        if (spider.style.left > `${wallWidth - spiderWidth}px`) {
          spider.style.left = `${wallWidth - spiderWidth}px`;
        }
        break;

      case coordX < maxDistanceLeft:
        spider.style.top = `${lengthFromBorderToCursorY - spiderCenter}px`;
        spider.style.left = `${0}px`;
        break;

      case coordX > maxDistanceRight:
        spider.style.top = `${lengthFromBorderToCursorY - spiderCenter}px`;
        spider.style.left = `${wallWidth - spiderWidth}px`;
        break;

      default:
        spider.style.top = `${lengthFromBorderToCursorY - spiderCenter}px`;
        spider.style.left = `${lengthFromBorderToCursorX - spiderCenter}px`;
        break;
    }
  }
});
