'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  let newLeft = clickX - spiderHalfWidth;
  let newTop = clickY - spiderHalfHeight;

  newLeft = Math.max(
    0,
    Math.min(newLeft, wall.clientWidth - spider.offsetWidth),
  );

  newTop = Math.max(
    0,
    Math.min(newTop, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
