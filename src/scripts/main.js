/* eslint-disable no-undef */
// they sad "getComputedStyle is not undefined"
'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

const wall = document.querySelector('.wall');

spider.style.transitionTimingFunction = 'linear';

wall.addEventListener('mousemove', event => {
  spider.style.left = `${getRightX(event.offsetX)}px`;
  spider.style.top = `${getRightY(event.offsetY)}px`;
});

function getRightX(eventX) {
  let x = eventX;

  if (x < 0 + spiderWidth / 2) {
    x = spiderWidth / 2;
  }

  if (x > wall.clientWidth - spiderWidth) {
    x = wall.clientWidth - spiderWidth / 2;
  }

  return x - spiderWidth / 2;
}

function getRightY(eventY) {
  let y = eventY;

  if (y < 0 + spiderHeight / 2) {
    y = spiderHeight / 2;
  }

  if (y > wall.clientHeight - spiderHeight) {
    y = wall.clientHeight - spiderHeight / 2;
  }

  return y - spiderHeight / 2;
}
