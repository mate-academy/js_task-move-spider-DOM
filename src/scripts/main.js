'use strict';

const getMaxValue = (maxValue, value) => {
  if (value < 0) {
    return 0;
  }

  return value > maxValue ? maxValue : value;
};

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const spiderSize = spider.getBoundingClientRect();
  const wall = document.querySelector('.wall');
  const wallSize = wall.getBoundingClientRect();
  const borderWidth = wall.clientTop;
  const wallTop = wallSize.top + borderWidth;
  const wallLeft = wallSize.left + borderWidth;
  const maxBottom = wallSize.height - 2 * borderWidth - spiderSize.height;
  const maxLeft = wallSize.width - 2 * borderWidth - spiderSize.width;
  const topPosition = e.clientY - wallTop - spiderSize.height / 2;
  const leftPosition = e.clientX - wallLeft - spiderSize.width / 2;

  e.stopPropagation();

  if (e.target.className.includes('wall')) {
    spider.style.top = `${getMaxValue(maxBottom, topPosition)}px`;
    spider.style.left = `${getMaxValue(maxLeft, leftPosition)}px`;
  }
});
