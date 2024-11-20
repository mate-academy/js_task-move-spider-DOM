'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const borderWidth = parseInt(getComputedStyle(wall).borderWidth);

  const wallTop = wall.offsetTop - window.scrollY;
  const wallLeft = wall.offsetLeft - window.scrollX;
  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newTop = e.clientY - wallTop - spiderHeight / 2;
  let newLeft = e.clientX - wallLeft - spiderWidth / 2;

  if (
    e.clientY < wallTop ||
    e.clientY > wallTop + wallHeight ||
    e.clientX < wallLeft ||
    e.clientX > wallLeft + wallWidth
  ) {
    return;
  }

  if (newTop < 0) {
    newTop = 0;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newTop + spiderHeight > wallHeight) {
    newTop = wallHeight - spiderHeight - borderWidth * 2;
  }

  if (newLeft + spiderWidth > wallWidth) {
    newLeft = wallWidth - spiderWidth - borderWidth * 2;
  }

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
