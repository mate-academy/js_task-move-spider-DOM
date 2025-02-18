'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();
  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  let newX = e.clientX - wallRect.left - spiderHalfWidth;
  let newY = e.clientY - wallRect.top - spiderHalfHeight;

  newX = Math.max(0, Math.min(newX, wallRect.width - spiderRect.width));
  newY = Math.max(0, Math.min(newY, wallRect.height - spiderRect.height));

  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
