'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  let leftCoordinate = e.clientX - wallRect.left - spider.offsetWidth / 2;
  let topCoordinate = e.clientY - wallRect.top - spider.offsetHeight / 2;

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  if (leftCoordinate < 0) {
    leftCoordinate = 0;
  }

  if (topCoordinate < 0) {
    topCoordinate = 0;
  }

  if (leftCoordinate > maxLeft) {
    leftCoordinate = maxLeft;
  }

  if (topCoordinate > maxTop) {
    topCoordinate = maxTop;
  }

  spider.style.left = `${leftCoordinate}px`;
  spider.style.top = `${topCoordinate}px`;
});
