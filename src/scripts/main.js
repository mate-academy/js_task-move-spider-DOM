'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const clickX = e.clientX - wallRect.left - wall.clientLeft;
  const clickY = e.clientY - wallRect.top - wall.clientTop;

  let leftPosition = clickX - spiderRect.width / 2;
  let topPosition = clickY - spiderRect.height / 2;

  const maxLeft = wall.clientWidth - spiderRect.width;
  const maxTop = wall.clientHeight - spiderRect.height;

  if (leftPosition < 0) {
    leftPosition = 0;
  } else if (leftPosition > maxLeft) {
    leftPosition = maxLeft;
  }

  if (topPosition < 0) {
    topPosition = 0;
  } else if (topPosition > maxTop) {
    topPosition = maxTop;
  }

  spider.style.left = leftPosition + 'px';
  spider.style.top = topPosition + 'px';
});
