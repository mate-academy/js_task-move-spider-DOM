'use strict';
/* eslint-disable no-shadow */

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const {
  clientWidth: wallWidth,
  clientHeight: wallHeight,
} = wall;
const {
  offsetWidth: spiderWidth,
  offsetHeight: spiderHeight,
} = spider;
const limits = {
  x: {
    min: 0,
    max: wallWidth - spiderWidth,
  },
  y: {
    min: 0,
    max: wallHeight - spiderHeight,
  },
};

document.addEventListener('click', e => {
  const {
    clientX,
    clientY,
    offsetX,
    offsetY,
  } = e;
  const insideWall = document
    .elementFromPoint(clientX, clientY)
    .closest('.wall');

  if (!insideWall) {
    return;
  }

  let left = offsetX - spiderWidth / 2;
  let top = offsetY - spiderHeight / 2;

  left = left < limits.x.min
    ? limits.x.min
    : left > limits.x.max
      ? limits.x.max
      : left;

  top = top < limits.y.min
    ? limits.y.min
    : top > limits.y.max
      ? limits.y.max
      : top;

  spider.style.left = left + 'px';
  spider.style.top = top + 'px';
});
