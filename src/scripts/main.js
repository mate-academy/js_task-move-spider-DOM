'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const calcDistance = (offset, prop) => {
  const siderHalfSize = (parseFloat(getComputedStyle(spider)[prop]) / 2);
  const wallSize = (parseFloat(getComputedStyle(wall)[prop]));

  if (offset < siderHalfSize) {
    return `0px`;
  }

  if (offset > wallSize - siderHalfSize) {
    return `${wallSize - siderHalfSize * 2}px`;
  }

  return `${offset - siderHalfSize}px`;
};

wall.addEventListener('click', e => {
  spider.style.top = calcDistance(e.offsetY, 'height');
  spider.style.left = calcDistance(e.offsetX, 'width');
});
