'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spider);
const wallStyle = getComputedStyle(wall);

spider.style.position = 'absolute';

function createValidRange(num, min, max) {
  if (num < min) {
    return min;
  }

  if (num > max) {
    return max;
  }

  return num;
}

wall.addEventListener('click', e => {
  const spiderPosCenter = {
    x: (parseInt(spiderStyle.width) / 2),
    y: (parseInt(spiderStyle.height) / 2),
  };
  const wallDimenesions = {
    x: parseInt(wallStyle.width),
    y: parseInt(wallStyle.height),
  };

  const distanceLeft = createValidRange(
    e.offsetX,
    spiderPosCenter.x,
    wallDimenesions.x - spiderPosCenter.x
  );
  const distanceTop = createValidRange(
    e.offsetY,
    spiderPosCenter.y,
    wallDimenesions.y - spiderPosCenter.y
  );

  spider.style.left = `${distanceLeft - spiderPosCenter.x}px`;
  spider.style.top = `${distanceTop - spiderPosCenter.y}px`;
});
