'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const wall = document.querySelector('.wall');
  const rect = wall.getBoundingClientRect();

  if (
    e.clientY < rect.top ||
    e.clientY > rect.bottom ||
    e.clientX < rect.left ||
    e.clientX > rect.right
  ) {
    return;
  }

  let y = e.clientY - rect.top - wall.clientTop - spider.clientHeight / 2;
  let x = e.clientX - rect.left - wall.clientLeft - spider.clientWidth / 2;

  const topLimit = 0;
  const leftLimit = 0;
  const rightLimit = wall.clientWidth - spider.clientWidth;
  const bottomLimit = wall.clientHeight - spider.clientHeight;

  if (y < topLimit) {
    y = topLimit;
  }

  if (x < leftLimit) {
    x = leftLimit;
  }

  if (x > rightLimit) {
    x = rightLimit;
  }

  if (y > bottomLimit) {
    y = bottomLimit;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
