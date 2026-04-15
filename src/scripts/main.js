'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wallSizes = wall.getBoundingClientRect();
  const spSizes = spider.getBoundingClientRect();

  const left = e.clientX - wallSizes.left - wall.clientLeft - spSizes.width / 2;
  const up = e.clientY - wallSizes.top - wall.clientTop - spSizes.height / 2;

  const maxLeft = wall.clientWidth - spSizes.width;
  const maxUp = wall.clientHeight - spSizes.height;

  const boundX = Math.min(Math.max(0, left), maxLeft);
  const boundY = Math.min(Math.max(0, up), maxUp);

  if (
    e.clientX < wallSizes.left ||
    e.clientX > wallSizes.right ||
    e.clientY < wallSizes.top ||
    e.clientY > wallSizes.bottom
  ) {
    return;
  }

  spider.style.left = `${boundX}px`;
  spider.style.top = `${boundY}px`;
});
