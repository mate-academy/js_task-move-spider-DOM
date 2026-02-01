'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();

  // klik poza ścianą → nic nie rób
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let left = e.clientX - wallRect.left - spiderWidth / 2;
  let topPosition = e.clientY - wallRect.top - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wall.offsetWidth - spiderWidth));

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.offsetHeight - spiderHeight),
  );

  spider.style.left = `${left}px`;
  spider.style.top = `${topPosition}px`;
});
