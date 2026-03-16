'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let leftPos = x - wallRect.left - spiderRect.width / 2;
  let topPos = y - wallRect.top - spiderRect.height / 2;

  const maxLeft = wallRect.width - spiderRect.width;
  const maxTop = wallRect.height - spiderRect.height;

  if (leftPos < 0) {
    leftPos = 0;
  }

  if (topPos < 0) {
    topPos = 0;
  }

  if (leftPos > maxLeft) {
    leftPos = maxLeft;
  }

  if (topPos > maxTop) {
    topPos = maxTop;
  }

  spider.style.position = 'absolute';
  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
