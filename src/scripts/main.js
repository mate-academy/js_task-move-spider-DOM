'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const maxLeft = wall.clientWidth - spider.offsetWidth;
const maxTop = wall.clientHeight - spider.offsetHeight;

wall.addEventListener('click', event => {
  const wallPosition = wall.getBoundingClientRect();
  const wallLeftPosition = wallPosition.left + wall.clientLeft;
  const wallTopPosition = wallPosition.top + wall.clientTop;

  let left = event.clientX - wallLeftPosition - (spider.offsetWidth / 2);
  let top = event.clientY - wallTopPosition - (spider.offsetHeight / 2);

  if (left < 0) {
    left = 0;
  } else if (left > maxLeft) {
    left = maxLeft;
  }

  if (top < 0) {
    top = 0;
  } else if (top > maxTop) {
    top = maxTop;
  }

  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
