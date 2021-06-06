'use strict';

const wall = document.querySelector('.wall');
const wallStyle = getComputedStyle(wall);
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (document.elementFromPoint(e.clientX, e.clientY)
    .className !== 'wall') {
    return;
  }

  const wallBorder = parseInt(wallStyle.border);

  const wallSize = {
    width: parseInt(getComputedStyle(wall).width),
    height: parseInt(getComputedStyle(wall).height),
  };

  const spiderBody = {
    height: parseInt(getComputedStyle(spider).height),
    width: parseInt(getComputedStyle(spider).width),
  };

  const coords = {
    minLeft: 0,
    minTop: 0,
    maxLeft: `${wallSize.width - spiderBody.width}px`,
    maxTop: `${wallSize.height - spiderBody.height}px`,
  };

  const position = {
    x: e.clientX - wall.getBoundingClientRect().x - wallBorder,
    y: e.clientY - wall.getBoundingClientRect().y - wallBorder,
    minLeft: 0,
    minTop: 0,
    maxLeft: `${wallSize.width - spiderBody.width}px`,
    maxTop: `${wallSize.height - spiderBody.height}px`,
  };

  spider.style.left = (position.x <= spiderBody.width / 2)
    ? coords.minLeft
    : (position.x > spiderBody.width / 2
      && position.x < wallSize.width - spiderBody.width / 2)
      ? `${position.x - spiderBody.width / 2}px`
      : coords.maxLeft;

  spider.style.top = (position.y <= spiderBody.height / 2)
    ? coords.minTop
    : (position.y > spiderBody.height / 2
      && position.y < wallSize.height - spiderBody.height / 2)
      ? `${position.y - spiderBody.height / 2}px`
      : coords.maxLeft;
});
