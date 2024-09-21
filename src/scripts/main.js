'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  let newTop =
    e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;
  let newLeft =
    e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop > wall.clientHeight - spider.clientHeight) {
    newTop = wall.clientHeight - spider.clientHeight;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft > wall.clientWidth - spider.clientWidth) {
    newLeft = wall.clientWidth - spider.clientWidth;
  }

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
