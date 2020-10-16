'use strict';

const spider = document.querySelector('.spider');
const spiderSize = spider.clientWidth;

document.addEventListener('click', e => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const gapTop = e.clientY - (wall.offsetTop + wall.clientTop);
  const gapLeft = e.clientX - (wall.offsetLeft + wall.clientLeft);
  let xPosition = wall.clientWidth - spiderSize;
  let yPosition = wall.clientHeight - spiderSize;

  if (gapTop <= wall.clientHeight - spiderSize) {
    yPosition = gapTop - (spiderSize / 2);
  }

  if (gapLeft <= wall.clientWidth - spiderSize) {
    xPosition = gapLeft - (spiderSize / 2);
  }

  if (gapTop <= spiderSize) {
    yPosition = '0';
  }

  if (gapLeft <= spiderSize) {
    xPosition = '0';
  }

  spider.style.top = yPosition + 'px';
  spider.style.left = xPosition + 'px';
});
