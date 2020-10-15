'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const spiderWidth = spider.offsetHeight;
const spiderHeight = spider.offsetWidth;

const heightDifference = wall.offsetTop + wall.clientTop;
const widthDifference = wall.offsetLeft + wall.clientLeft;

document.addEventListener('click', event => {
  let spiderLeft = event.clientX - widthDifference - spiderWidth / 2;
  let spiderTop = event.clientY - heightDifference - spiderHeight / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  const rightGap = spiderLeft + spiderWidth;
  const bottomGap = spiderTop + spiderHeight;

  if (rightGap > wall.clientWidth) {
    spiderLeft -= rightGap - wall.clientWidth;
  }

  if (bottomGap > wall.clientHeight) {
    spiderTop -= bottomGap - wall.clientHeight;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
