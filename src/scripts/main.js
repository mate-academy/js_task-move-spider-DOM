'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const relativeX = e.clientX - wallRect.left;
  const relativeY = e.clientY - wallRect.top;

  const desiredLeft = relativeX - Math.round(spiderWidth / 2);
  const desiredTop = relativeY - Math.round(spiderHeight / 2);

  const maxLeft = wallWidth - spiderWidth;
  const maxTop = wallHeight - spiderHeight;

  const finalLeft = Math.max(0, Math.min(Math.round(desiredLeft), maxLeft));
  const finalTop = Math.max(0, Math.min(Math.round(desiredTop), maxTop));

  setTimeout(() => {
    spider.style.left = `${finalLeft}px`;
    spider.style.top = `${finalTop}px`;
  }, 50);
});
