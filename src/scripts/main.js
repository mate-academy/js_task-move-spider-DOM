'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  // ignore clicks outside wall
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  // ❗ враховуємо border
  const relativeX = e.clientX - wallRect.left - wall.clientLeft;
  const relativeY = e.clientY - wallRect.top - wall.clientTop;

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let newLeft = relativeX - spiderWidth / 2;
  let newTop = relativeY - spiderHeight / 2;

  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft > maxX) {
    newLeft = maxX;
  }

  if (newTop > maxY) {
    newTop = maxY;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
