'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallRect = wall.getBoundingClientRect();

  let topPosition =
    e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;
  let leftPosition =
    e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;

  // лево
  if (leftPosition < 0) {
    leftPosition = 0;
  }

  // верх
  if (topPosition < 0) {
    topPosition = 0;
  }

  // право
  if (leftPosition > wall.clientWidth - spiderWidth) {
    leftPosition = wall.clientWidth - spiderWidth;
  }

  // низ
  if (topPosition > wall.clientHeight - spiderHeight) {
    topPosition = wall.clientHeight - spiderHeight;
  }

  spider.style.top = topPosition + 'px';
  spider.style.left = leftPosition + 'px';
});
