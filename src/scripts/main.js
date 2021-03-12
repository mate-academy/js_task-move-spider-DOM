'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = [
  spider.clientWidth / 2,
  spider.clientHeight / 2,
];
const borderSize = wall.clientLeft;

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  let spiderX;
  let spiderY;

  const maxOpenWidth = wall.clientWidth - spiderSize[0];
  const maxOpenHeight = wall.clientWidth - spiderSize[1];

  if (e.offsetX - spiderSize[0] > maxOpenWidth - spiderSize[0] - borderSize) {
    spiderX = (maxOpenWidth - spiderSize[1]) + 'px';
  }

  if (e.offsetX - spiderSize[0] <= 0) {
    spiderX = 0;
  }

  if (e.offsetY - spiderSize[1] > maxOpenHeight - spiderSize[1] - borderSize) {
    spiderY = (maxOpenHeight - spiderSize[1]) + 'px';
  }

  if (e.offsetY - spiderSize[1] <= 0) {
    spiderY = 0;
  }

  if (spiderY === undefined) {
    spiderY = e.offsetY - spiderSize[1] + 'px';
  }

  if (spiderX === undefined) {
    spiderX = e.offsetX - spiderSize[0] + 'px';
  }

  spider.style.top = spiderY;
  spider.style.left = spiderX;
});
