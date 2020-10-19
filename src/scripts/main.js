'use strict';

const spider = document.querySelector('.spider');
const spiderSize = spider.offsetWidth;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const topGap = wall.offsetTop + wall.clientTop;
  const leftGap = wall.offsetLeft + wall.clientLeft;

  let positionX = e.clientX - leftGap - spiderSize / 2;
  let positionY = e.clientY - topGap - spiderSize / 2;

  if (positionY < 0) {
    positionY = 0;
  }

  if (positionX < 0) {
    positionX = 0;
  }

  if (positionX > wall.clientWidth - spiderSize) {
    positionX = wall.clientWidth - spiderSize;
  }

  if (positionY > wall.clientHeight - spiderSize) {
    positionY = wall.clientHeight - spiderSize;
  }

  spider.style.top = `${positionY}px`;
  spider.style.left = `${positionX}px`;
});
